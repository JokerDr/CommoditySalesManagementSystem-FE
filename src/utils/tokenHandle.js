const tokenKey = 'token';
const tokenOwner = 'tokenOwner';

export const setToken = payload => {
  localStorage.setItem(tokenKey, payload);
};

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const removeToken = () => {
  return localStorage.removeItem(tokenKey);
};

export const setTokenOwner = payload => {
  localStorage.setItem(tokenOwner, payload);
};

export const getTokenOwner = () => {
  return localStorage.getItem(tokenOwner);
};
