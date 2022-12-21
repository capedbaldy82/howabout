import styled from '@emotion/styled';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IntroPost from '@components/intro/introPost';
import { representative } from '../constants/style';
import media from '../libs/media';

interface IntroPostType {
  id: number;
  image: string;
  alt: string;
  content: string;
}

const Intro: NextPage<{ posts: IntroPostType[] }> = ({ posts }) => {
  return (
    <section>
      <h2 className="screen_out">소개</h2>
      <Why>
        {posts &&
          posts.map((post: IntroPostType) => (
            <IntroPost key={post.id} src={post.image} alt={post.alt} content={post.content} />
          ))}
      </Why>
      <LinkWrapper>
        <div>
          <Link href="/product">상품 보러가기</Link>
          {/* <Link href="/style">스타일 보러가기</Link> */}
        </div>
      </LinkWrapper>
    </section>
  );
};

export default Intro;

export const getStaticProps: GetStaticProps = async () => {
  const introPosts: IntroPostType[] = [
    {
      id: 1,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/74d66e75-3224-4f47-86a5-1540bfac3200/intro',
      alt: '버려진 옷들',
      content: '옷장에 옷은 많지만 입을 옷이 없으신가요',
    },
    {
      id: 2,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/0ffe44d0-5ff0-49dc-4072-930f50ad7200/intro',
      alt: '형형색색의 양말',
      content: '구매하기 전에 충분히 입어보세요',
    },
    {
      id: 3,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/15031af6-ab2a-4ea3-30ae-f6dcf3b13800/intro',
      alt: '버려진 옷들',
      content: 'HowAbout과 함께 입을 옷만 옷장에 담아보세요',
    },
  ];
  return {
    props: {
      posts: introPosts,
    },
  };
};

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

  & > div {
    position: relative;
    z-index: -1;
  }
`;

const Why = styled.article`
  margin: 0 auto;
  margin-top: 160px;
  text-align: center;

  width: 100%;
  max-width: ${representative.maxWidth};

  & > div {
    margin-bottom: 60px;
    ${media.tablet`margin-bottom:120px`};
  }

  & p {
    font-family: 'EF_Diary';
    word-break: keep-all;
    padding: 1rem;

    line-height: 22px;
    ${media.tablet`line-height:28px`};

    font-size: 16px;
    ${media.tablet`font-size:20px`};
  }

  & > div > div {
    flex-wrap: wrap;

    & > img {
      margin-bottom: 8px;
      width: 50%;
      max-width: 275px;
    }
  }
`;

const LinkWrapper = styled.nav`
  margin: 0 auto;
  width: 100%;
  max-width: ${representative.maxWidth};

  margin-bottom: 80px;
  ${media.tablet`margin-bottom:120px`};

  & > div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    ${media.tablet`width:45%`};
    ${media.tablet`min-width`}

    & > a {
      text-align: center;
      width: 48%;
      padding: 1rem;
      background-color: black;
      color: white;
      border-radius: 5px;
      font-family: 'KyoboHandwriting2020pdy';
    }
  }
`;
