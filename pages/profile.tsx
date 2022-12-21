import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';
import useSWRLogin from '@hooks/useSWRLogin';
import ProfileSummary from '@components/profile/profileSummary';
import ProfileDetail from '@components/profile/profileDetail';
import { BASE_URL } from '@constants/server';
import fetchWithAuth from '@libs/fetchWithAuth';

const Profile: NextPage = () => {
  const router = useRouter();
  const loginState = useSWRLogin();

  return (
    <section>
      <h2 className="screen_out">Profile</h2>
      <ProfileSummary />
      <ProfileDetail />
    </section>
  );
};

export default Profile;
