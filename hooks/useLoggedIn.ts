import { BASE_URL } from '../constants/server';
import useSWR from 'swr';
import fetchForAuth from '@libs/fetchForAuth';

const useLoggedIn = () => {
  const { data } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);

  return data?.ok;
};

export default useLoggedIn;
