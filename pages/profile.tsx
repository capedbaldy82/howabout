import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useLoggedIn from '@hooks/useLoggedIn';
import ProfileSummary from '@components/profile/profileSummary';
import ProfileDetail from '@components/profile/profileDetail';

const Profile: NextPage = () => {
  const router = useRouter();
  const loginState = useLoggedIn();

  return (
    <section>
      <h2 className="screen_out">Profile</h2>
      <ProfileSummary />
      <ProfileDetail />
    </section>
  );
};

export default Profile;
