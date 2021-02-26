// import qs from 'qs';
import jwtDecode from "jwt-decode";
import { addSeconds, differenceInMinutes } from "date-fns";
import Cookies from "js-cookie";
import { IdentityServerAPI } from "@monorepo-nx/services/api";
import {
  PIN,
  USER_ACCESS_COOKIE,
  SUPER_USER_ACCESS_COOKIE,
  USER_CHAT,
  USER_TYPE,
  USER_SESSION
} from "@monorepo-nx/utils";
import { zenDesk } from "@monorepo-nx/services/gtm";

const LOCAL_STORAGE_KEYS = {
  accessToken: "access_token",
  expiresIn: "expires_in",
  createdAt: "create_at",
  username: "username",
  broker: "broker"
};

export const getAuth = () => Cookies.getJSON(USER_ACCESS_COOKIE) || {};

export const isTokenExpired = (expiresIn, createAt) => {
  const expiresInSeconds = expiresIn;
  const createdAt = createAt;
  const dateToExpire = addSeconds(createdAt, expiresInSeconds);
  const minutesToExpire = differenceInMinutes(dateToExpire, new Date());

  // if it is the last minute to expire or less, go to login
  return minutesToExpire <= 1;
};

export const isAuthenticated = () => {
  const { token, broker, expiresIn, createAt } = getAuth();

  const user = broker && broker.user;
  return user && token && !isTokenExpired(expiresIn, createAt);
};

export const getItem = key =>
  key ? localStorage.getItem(LOCAL_STORAGE_KEYS[key]) : null;
export const setItem = (key, value) =>
  key ? localStorage.setItem(LOCAL_STORAGE_KEYS[key], value) : null;

export const getSuperUser = () =>
  Cookies.getJSON(SUPER_USER_ACCESS_COOKIE) || null;

export const isSuperUserLogged = () => {
  const superUser = getSuperUser();

  if (!superUser) {
    return false;
  }

  return !isTokenExpired(superUser.token.expires_in, superUser.token.create_at);
};

export const getUserProfile = () => {
  let userProfile;

  const { token } = Cookies.getJSON(USER_ACCESS_COOKIE) || {};
  const decodedToken = token && jwtDecode(token);

  const isSuperUser = decodedToken && decodedToken.loginOwnerUserName;
  const isUserBroker = decodedToken && decodedToken.role === "broker";

  if (isSuperUser) {
    userProfile = USER_TYPE.commercial;
  } else if (isUserBroker) {
    userProfile = USER_TYPE.broker;
  } else {
    userProfile = USER_TYPE.policyholder;
  }

  return userProfile;
};

/**
 * clearAuthData()
 *
 * Clear the authentication data before redirecting user in a
 * logout process for regular or super users.
 *
 * @param {boolean} keepSuperUserData - a boolean to inform if the "suac" cookie shall be kept
 */
export const clearAuthData = async (keepSuperUserData = false) => {
  // close current zenDesk session
  await zenDesk.close();

  // keep theme
  const userTheme = localStorage.getItem("userTheme");

  // clear all local storage data
  localStorage.clear();

  // keep theme data if exists
  userTheme && localStorage.setItem("userTheme", userTheme);

  // Remove cookies
  Cookies.remove(PIN, { domain: `${process.env.NX_REACT_APP_DOMAIN}` });
  Cookies.remove(USER_SESSION, { domain: `${process.env.NX_REACT_APP_DOMAIN}` });
  Cookies.remove(USER_CHAT, { domain: `${process.env.NX_REACT_APP_DOMAIN}` });
  Cookies.remove(USER_ACCESS_COOKIE, {
    domain: `${process.env.NX_REACT_APP_DOMAIN}`
  });

  // if it's not supposed to keep the super user data, remove this item too
  !keepSuperUserData &&
    Cookies.remove(SUPER_USER_ACCESS_COOKIE, {
      domain: `${process.env.NX_REACT_APP_DOMAIN}`
    });
};

/**
 * logout()
 *
 * Clear the website data and redirect user to the login page
 * or the theme page if applicable
 */
export const logout = async () => {
  await clearAuthData();
  const userTheme = localStorage.getItem("userTheme");

  window.location = `${process.env.NX_REACT_APP_PLATAFORMA_LOGIN}${
    userTheme ? `/${userTheme}` : ""
  }`;
};

export const getPermissions = async () => {
  const { data } = await IdentityServerAPI.RefreshToken();

  const permissions =
    data.claims['permissions.policyholder'] !== undefined
      ? data.claims['permissions.policyholder']
      : [];

  const modalities =
    data.claims['modalities.policyholder'] !== undefined
      ? data.claims['modalities.policyholder']
      : [];

  return { permissions, modalities };
}

/**
 * changeBroker()
 *
 * Clear the website data but keeps the super user data and redirect user to
 * the broker selection page
 */
export const changeBroker = async () => {
  await clearAuthData(true);

  window.location = `${process.env.NX_REACT_APP_PLATAFORMA_LOGIN_COMERCIAL}/select-broker`;
};

/**
 * logoutSuperUser()
 *
 * Clear the website data and redirects user to the commercial user's login page
 */
export const logoutSuperUser = async () => {
  await clearAuthData();

  window.location = `${process.env.NX_REACT_APP_PLATAFORMA_LOGIN_COMERCIAL}`;
};

class Authentication {
  constructor(urlOrigin, urlLogin) {
    this.urlOrigin = urlOrigin;
    this.urlLogin = urlLogin;
  }

  async handleAuthentication() {
    const isUserAuthenticated = isAuthenticated();
    if (isUserAuthenticated) {
      this.handleSaveData();
      return isUserAuthenticated;
    }

    this.redirectWithReturnUrl();
  }

  handleSaveData() {
    // const { search, pathname } = window.location;
    // const params = qs.parse(search, { ignoreQueryPrefix: true });
    const auth = getAuth();
    // const stringifiedParams = qs.stringify(params, { addQueryPrefix: true });

    if (auth && Object.keys(auth).length > 0) {
      const username =
        auth.broker && auth.broker.user && auth.broker.user.userName;
      // persist in localstorage auth data from login
      this.saveAuthData({ username: { username }, broker: auth.broker });
      // window.history.replaceState({}, document.title, `${pathname}${stringifiedParams}`);
    }
  }

  saveAuthData({ username, broker }) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.username, JSON.stringify(username));
    localStorage.setItem(LOCAL_STORAGE_KEYS.broker, JSON.stringify(broker));
  }

  updateCookie(data) {
    const theme = localStorage.getItem('userTheme');
    const permissions =
      data.claims['permissions.policyholder'] !== undefined
        ? data.claims['permissions.policyholder']
        : [];
    const modalities =
      data.claims['modalities.policyholder'] !== undefined
        ? data.claims['modalities.policyholder']
        : [];

    const access = {
      token: data.access_token,
      tokenType: data.token_type,
      createAt: new Date(),
      expiresIn: data.expires_in * 1000, // data.expires_in comes in seconds
      userId: (data && data.userId) || null,
      email: data.email,
      username: data.username,
      userTheme: theme,
      modalities,
      permissions
    };

    Cookies.set(USER_ACCESS_COOKIE, access, {
      expires: new Date(new Date().getTime() + access.expiresIn),
      domain: `${process.env.NX_REACT_APP_DOMAIN}`
    });
  }

  getUserData() {
    return getAuth();
  }

  async getBroker() {
    const { broker } = getAuth();
    if (broker && Object.keys(broker).length > 1) return broker;

    this.redirectWithReturnUrl();
    return null;
  }

  getRedirectUrl() {
    const urlBase = this.urlLogin;
    const url = `${urlBase}?redirectUrl=${
      this.urlOrigin ? encodeURI(this.urlOrigin) : ""
    }`;
    return url;
  }

  redirectWithReturnUrl() {
    window.location = this.getRedirectUrl();
  }

  async refreshToken() {
    const { data } = await IdentityServerAPI.RefreshToken();
    return data && this.updateCookie(data);
  }

  static getAccessToken() {
    const { token } = getAuth();
    return token;
  }
}

export default Authentication;
