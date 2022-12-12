import { BASE_URL } from '../constants/server';
import cookies from 'react-cookies';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useLoggedIn = () => {
  // const [loginState, setLoginState] = useRecoilState(LoginState);
  const [loginState, setLoginState] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getLoginState = async () => {
      const token = cookies.load('accessToken');

      if (!token) {
        setLoginState(false);
        router.replace('/login');
        return;
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
        setLoginState(false);
        router.replace('/login');
        return;
      } else {
        setLoginState(true);
        return;
      }
    };

    getLoginState();
  }, []);

  return loginState;
};

export default useLoggedIn;
