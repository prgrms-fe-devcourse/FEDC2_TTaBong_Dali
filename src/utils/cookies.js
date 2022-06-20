import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) =>
  cookies.set(name, value, { ...option });

export const getCookie = (name) => cookies.get(name);

export const removeCookie = (name) => cookies.remove(name);

export const removeAllCookie = () =>
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  });
