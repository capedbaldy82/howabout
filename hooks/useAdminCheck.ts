import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useUserInfo from '@hooks/useUserInfo';

const useAdminCheck = () => {
  const router = useRouter();
  const userInfo = useUserInfo();

  useEffect(() => {
    if (userInfo?.user?.username) {
      if (userInfo.user.username === 'admin') {
        return;
      }

      router.replace('/product');
    }
  }, [userInfo, router]);
};

export default useAdminCheck;
