import qs from 'qs';
import Cookies from 'js-cookie';
import { USER_ACCESS_COOKIE } from '../constants/constants';

const APPS = {
  endosso: process.env.NX_REACT_APP_PLATAFORMA_ENDOSSO,
  tomador: process.env.NX_REACT_APP_PLATAFORMA_TOMADOR,
  ajuda: process.env.NX_REACT_APP_PLATAFORMA_AJUDA,
  emissao: process.env.NX_REACT_APP_PLATAFORMA_URL,
  extrato: process.env.NX_REACT_APP_PLATAFORMA_EXTRATO,
};

export const redirectWithToken = (redirectUrl, queryParams = {}) => {
  const { token, expiresIn, broker } = Cookies.getJSON(USER_ACCESS_COOKIE);
  const user = localStorage.getItem('username');

  if (!broker || !token || !expiresIn || !user) {
    window.location = process.env.NX_REACT_APP_PLATAFORMA_LOGIN;
  } else {
    const stringFieldParams = qs.stringify(
      {...queryParams },
      { addQueryPrefix: true }
    );
    window.location = `${redirectUrl}${stringFieldParams}`;
  }
};

export const redirectToApp = (app, page, params) => {
  let url = `${APPS[app]}`;
  if (page) url += page;
  redirectWithToken(url, params);
};
