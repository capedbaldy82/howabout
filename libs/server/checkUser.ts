import { BASE_URL } from '../../constants/server';
import cookies from 'react-cookies';

interface CheckUserResult {
  ok: boolean;
}

const checkUser = async (): Promise<CheckUserResult> => {
  const token = cookies.load('accessToken');

  if (!token) {
    return { ok: false };
  }

  const response = await fetch(`${BASE_URL}/auth/check`, {
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

export default checkUser;
