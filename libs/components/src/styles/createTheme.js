import deepmerge from 'deepmerge';
import * as themes from './themes';

const getUserTheme = user => {
  const userTheme = themes[user] || {};
  return deepmerge(themes.junto, userTheme);
};

const theme = username => getUserTheme(username);

export default theme;
