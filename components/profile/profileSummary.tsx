import BackgroundLayout from '@components/profile/backgroundLayout';
import { BASE_URL } from '@constants/server';
import { representative } from '@constants/style';
import styled from '@emotion/styled';
import fetchForAuth from '@libs/fetchForAuth';
import fetchWithAuth from '@libs/fetchWithAuth';
import { removeCookie } from '@libs/handleCookie';
import media from '@libs/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';

const ProfileSummary = () => {
  const { data } = useSWR(`${BASE_URL}/auth/userinfo`, fetchWithAuth);
  const router = useRouter();

  // 로그아웃
  const logOut = () => {
    if (!confirm('로그아웃 하시겠습니까?')) return;

    removeCookie('accessToken');
    mutate(`${BASE_URL}/auth/check`, fetchForAuth, false);
    router.replace('/');
  };

  return (
    <BackgroundLayout color="white" backgroundColor="black">
      <ProfileSummaryWrapper>
        <ImageWrapper>
          <Image src="/image/profile.jpeg" width={250} height={250} />
        </ImageWrapper>
        <ContentsWrapper>
          <InfoWrapper>
            <p>{data?.name}</p>
            <p>구독 등급</p>
            <p>구독 기간</p>
          </InfoWrapper>
          <LogOutWrapper>
            <button onClick={() => logOut()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </LogOutWrapper>
        </ContentsWrapper>
      </ProfileSummaryWrapper>
    </BackgroundLayout>
  );
};

export default ProfileSummary;

const ProfileSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  ${media.tablet`padding:32px`}
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 15%;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    font-family: 'MICEGOthic';
  }

  & > p + p {
    margin-top: 10px;
    ${media.tablet`margin-top:16px`}
  }

  & > p:first-of-type {
    font-size: 18px;
    ${media.tablet`font-size:24px`}
  }

  & > p:nth-of-type(2),
  p:last-of-type {
    font-size: 14px;
    ${media.tablet`font-size:16px`}
  }
`;

const LogOutWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  & > button {
    background-color: black;
    border: none;

    & > svg {
      width: 18px;
      height: 24px;
    }
  }
`;
