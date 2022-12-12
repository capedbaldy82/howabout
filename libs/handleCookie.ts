import cookie from 'react-cookies';

const setCookie = (cookieName: string, cookieData: string) => {
  const expires = new Date(Date.now() + 32460e3);

  cookie.save('accessToken', cookieData, { path: '/', httpOnly: false, maxAge: 60 * 60 });
};
const removeCookie = (cookieName: string) => {
  cookie.remove(cookieName);
};

export { setCookie, removeCookie };
