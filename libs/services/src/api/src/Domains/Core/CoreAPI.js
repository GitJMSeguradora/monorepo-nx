import qs from "qs";
import _ from "lodash";
import axios from "axios";
import Cookies from "js-cookie";

const getRedirectUrl = (origin) => {
  console.log('caiu')
  return `${process.env.NX_REACT_APP_PLATAFORMA_LOGIN}?redirectUrl=${
    origin ? encodeURI(origin) : ""
  }`;
};

const { token: authToken } = Cookies.getJSON("uac") || {};

class CoreAPI {
  constructor(baseURL, token = null) {
    this.baseURL = baseURL;
    this.token = token || authToken;
  }

  getInstance(contentType = "application/json") {
    const config = {
      baseURL: this.baseURL,
      headers: { "Content-Type": contentType },
    };

    const instance = axios.create(config);
    instance.interceptors.request.use(CoreAPI.handleHeader);
    instance.interceptors.response.use(
      CoreAPI.handleSuccess,
      CoreAPI.handleError
    );
    instance.interceptors.request.use(function (config) {
      const token = authToken;
      if (!token) {
        window.location = getRedirectUrl(window.location.href);
        return;
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    return instance;
  }

  static handleHeader(request) {
    if (
      request &&
      request.data &&
      request.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      request.data = qs.stringify(request.data);
    }
    return request;
  }

  static handleSuccess(error) {
    // Store.inProcess = false;
    return error;
  }

  static handleError(error) {
    // Store.inProcess = false;

    // if (error.message === 'Network Error') {
    //   Alert.error(
    //     'Sem conexão com a Internet. Por favor, verifique sua conexão e tente novamente.'
    //   );
    // }

    if (error.response && error.response.status === 401) {
      window.location = getRedirectUrl(window.location.href);
    }

    if (error && error.response && error.response.status === 500) {
      error.response.message =
        "Houve algum problema com os nossos serviços. Por favor, tente novamente";
    }

    return Promise.reject(error.response || error);
  }
}

export const capitalizeResponse = (data) => {
  const result = _.mapKeys(data, (v, k) => _.startCase(k).replace(/\s/g, ""));
  return result;
};

export const generateQueryString = (params) => {
  if (params && Object.keys(params).length) {
    return qs.stringify(params, { addQueryPrefix: true });
  }
  return "";
};

export default CoreAPI;
