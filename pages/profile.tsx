import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { LoginState, ProfileState } from '../store';

const Profile: NextPage = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const profileState = useRecoilValue(ProfileState);

  const logOut = () => {
    setLoginState(false);
    sessionStorage.removeItem('token');
    router.replace('/login');
  };

  useEffect(() => {
    if (!loginState) {
      router.push('/login');
    }
  }, []);

  return (
    <section>
      <h2 className="screen_out">Profile</h2>
      <p style={{ fontSize: '3rem' }}>{profileState?.name}</p>
      <button onClick={logOut}>로그아웃</button>
    </section>
  );
};

export default Profile;
