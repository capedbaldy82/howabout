import cookies from 'react-cookies';

const fetchForAuth = async (url: string) => {
  const token = cookies.load('accessToken');

  if (!token) {
    return { ok: false };
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (result.statusCode === 401) {
    return { ok: false };
  } else {
    return { ok: true };
  }
};

export default fetchForAuth;
