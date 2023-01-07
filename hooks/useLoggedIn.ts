import { BASE_URL } from '@constants/server';
import fetchForAuth from '@libs/fetchForAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const useLoggedIn = (routing = true) => {
  const { data } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);
  const router = useRouter();

  useEffect(() => {
    if (routing) {
      if (data && !data.ok) {
        router.replace('/');
      }
    }
  }, [data]);

  return data;
};

export default useLoggedIn;
