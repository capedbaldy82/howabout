import styled from '@emotion/styled';
import { useState } from 'react';
import media from '@libs/media';
import BackgroundLayout from '@components/profile/backgroundLayout';
import RentedClothes from '@components/profile/rentedClothes';
import loadable from '@loadable/component';

const UpdateProfile = loadable(() => import('@components/profile/updateProfile'), {
  fallback: <div>로딩 중..</div>,
});

const SubscribtionHistory = loadable(() => import('@components/profile/subscribtionHistory'), {
  fallback: <div>로딩 중..</div>,
});

const ProfileDetail = () => {
  const [profileMenu, setProfileMenu] = useState(0);

  const clickMenu = (menu: number) => {
    setProfileMenu(menu);
  };

  return (
    <BackgroundLayout>
      <ProfileDetailWrapper>
        <ProfileNav menu={profileMenu}>
          <ul>
            <li onClick={() => clickMenu(0)}>대여 상태</li>
            <li onClick={() => clickMenu(1)} onMouseOver={() => SubscribtionHistory.preload()}>
              구독 이력
            </li>
            <li onClick={() => clickMenu(2)} onMouseOver={() => UpdateProfile.preload()}>
              정보 수정
            </li>
          </ul>
        </ProfileNav>
        <ProfileContents>
          {profileMenu === 0 ? <RentedClothes /> : null}
          {profileMenu === 1 ? <SubscribtionHistory /> : null}
          {profileMenu === 2 ? <UpdateProfile /> : null}
        </ProfileContents>
      </ProfileDetailWrapper>
    </BackgroundLayout>
  );
};

export default ProfileDetail;

const ProfileDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`flex-direction:row`};
`;

const ProfileNav = styled.nav<{ menu: number }>`
  display: flex;
  justify-content: center;
  ${media.tablet`min-width:150px`};
  ${media.tablet`width:10%`};
  padding: 16px;
  ${media.tablet`padding:32px`}
  cursor: pointer;

  & > ul {
    display: flex;
    flex-direction: row;
    ${media.tablet`flex-direction:column`};
    align-items: center;
    width: 100%;

    & > li + li {
      margin-top: 0px;
      margin-left: 12px;
      ${media.tablet`margin-top: 18px;`};
      ${media.tablet`margin-left: 0px;`};
    }

    & > li:nth-of-type(${({ menu }) => menu + 1}) {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const ProfileContents = styled.div`
  ${media.tablet`width:calc(90%)`}
  ${media.tablet`max-width:calc(100% - 150px)`}
  padding:16px;
`;
