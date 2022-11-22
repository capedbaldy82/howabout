import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSWRConfig } from 'swr';
import ProfileInfo from '../components/profile/profileinfo';
import { BASE_URL } from '../constants/server';
import checkUser from '../libs/server/checkUser';
import { removeCookie } from '../libs/client/handleCookie';
import fetchForAuth from '../libs/server/fetchForAuth';

const Profile: NextPage = () => {
  const router = useRouter();
  const [isUser, setIsUser] = useState<boolean>(true);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    const ok = async () => {
      const result = await checkUser();

      if (!result?.ok) {
        setIsUser(false);
      } else {
        setIsUser(true);
      }
    };

    ok();
  }, []);

  // 로그인 상태 확인 후 리다이렉트 여
  useEffect(() => {
    if (!isUser) {
      router.replace('/login');
    }
  }, [isUser]);

  // 로그아웃
  const logOut = () => {
    removeCookie('accessToken');
    mutate(`${BASE_URL}/auth/check`, fetchForAuth, false);
    router.replace('/login');
  };

  return (
    <section>
      <h2 className="screen_out">Profile</h2>
      <section>
        <div>사진</div>
        <div>
          <div>
            <p>이름</p>
            <p>랭크</p>
          </div>
          <div>
            <button onClick={logOut}>logOut</button>
          </div>
        </div>
      </section>
      <section>
        <nav>
          <li>대여 상태</li>
          <li>구독 이력</li>
          <li>정보 수정</li>
        </nav>
        <div>컨텐츠</div>
      </section>
      <ProfileInfo />
    </section>
  );
};

export default Profile;
