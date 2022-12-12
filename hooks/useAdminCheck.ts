import { BASE_URL } from '../constants/server';
import cookies from 'react-cookies';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAdminCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const getUserInfo = async () => {
      const token = cookies.load('accessToken');

      if (!token) return;

      const response = await fetch(`${BASE_URL}/auth/userinfo`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      console.log(result.username);

      if (result.username === 'admin') {
      } else {
        router.replace('/product');
      }
    };

    getUserInfo();
  }, []);
};

export default useAdminCheck;
