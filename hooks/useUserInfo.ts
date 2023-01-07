import { BASE_URL } from '@constants/server';
import useSWR from 'swr';
import fetchWithAuth from '@libs/fetchWithAuth';

const useUserInfo = () => {
  const { data } = useSWR(`${BASE_URL}/auth/userinfo`, fetchWithAuth);

  return data;
};

export default useUserInfo;
