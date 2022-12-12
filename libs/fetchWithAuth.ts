import cookies from 'react-cookies';

const fetchWithAuth = async (url: string) => {
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

  return result;
};

export default fetchWithAuth;
