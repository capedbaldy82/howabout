import { BASE_URL } from '@constants/server';
import fetchForAuth from '@libs/fetchForAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const useSWRLogin = () => {
  const { data } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      alert('로그인 세션이 만료되었습니다.');
      router.replace('/login');
    }
  }, [data]);

  return { data };
};

export default useSWRLogin;
