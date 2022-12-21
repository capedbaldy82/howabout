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
      <Logo>
        <div>
          <Image
            src="https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/15031af6-ab2a-4ea3-30ae-f6dcf3b13800/intro"
            alt="브랜드 로고"
            width={550}
            height={350}
          />
        </div>
      </Logo>
      <Why>
        {posts &&
          posts.map((post: IntroPostType) => (
            <IntroPost key={post.id} src={post.image} alt={post.alt} content={post.content} />
          ))}
      </Why>
      <LinkWrapper>
        <div>
          <Link href="/product">상품 보러가기</Link>
          <Link href="/style">스타일 보러가기</Link>
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
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/74d66e75-3224-4f47-86a5-1540bfac3200/product',
      alt: '버려진 옷들',
      content:
        '항상 물려받은 옷만 입었던 저는 성인이 된 이후 자유와 해방감에 이옷 저옷 조금만 마음에 들어도 사입기 시작했습니다. 하지만 그렇게 4년이 흐르고 저는 버릴 옷 만 사왔다는 것을 느꼈습니다. 길면 그 해 계절까지만, 짧으면 사놓고 입지도 않는 옷들이 저의 옷장에, 아니 어쩌면 개인의류수거함에 쌓아두고 있던 것입니다.',
    },
    {
      id: 2,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/0ffe44d0-5ff0-49dc-4072-930f50ad7200/intro',
      alt: '스타일',
      content:
        "저는 고민하기 시작했습니다. '왜 나는 버릴 옷을 사고있는 걸까' 그렇게 고민을 하던 중 저는 처음으로 '스타일'이라는 패션의 범주화된 개념을 알게 되었습니다. 패션에는 제가 알지 못했던 범주화된 다양한 스타일이 존재했습니다 밀리터리, 워크웨어, 아메카지, 스트릿, 아이비룩, 테크웨어, 클래식 등.. 물론 모든 패션 스타일에 대해서 범주화가 가능한 것은 아닙니다. 범주화 되지 않은, 범주화 될 수 없는 스타일도 존재한다고 생각하며, 믹스매치라는 개념도 있으니말입니다.",
    },
    {
      id: 3,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/9bbe4c20-a0bf-4d4c-bcc4-fd2f0a52fa00/intro',
      alt: '밀리터리',
      content:
        '다시 돌아와 그걸 알게 된 당시에는 밀리터리 스타일에 빠져있었습니다. 한 스타일의 범주 내에서 옷을 구매하다보니 이렇게 입어도 저렇게 입어도 매치가 잘 된다는 느낌을 받았고, 처음으로 제 옷들의 대부분이 거주기간이 1년을 넘겼습니다. 하지만 한 해가 더 흘러 2년이 지나고서야 저는 더 이상 밀리터리에 관심이 가지 않았습니다. 정확히는 그제서야 나와는 별로 안어울린다는 생각이 들었습니다.',
    },
    {
      id: 4,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/1e2855f7-1572-4a6b-5d7e-ce520dd91400/intro',
      alt: '워크웨어',
      content:
        '그래도 나름 가장 오래 버리지않은 옷들이였지만, 결국 버릴 옷이였던 겁니다. 다양한 스타일을 경험해볼 필요가 있다고 느꼈습니다. 제가 좋아하는 스타일이 1순위지만 그 만큼 나에게 잘어울리는 스타일인 것도 중요했습니다. 그렇게 2년이 흐르고 현재까지는 워크웨어, 밀리터리, 아이비룩을 주로입고 있습니다.',
    },
    {
      id: 5,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/a08606c2-db17-4b15-c932-acad9cbb5a00/intro',
      alt: '침체기(성인) - 혼란기(4년) - 과도기(2년) - 안정기(진행 중)',
      content: '저의 옷에 대한 연대기는 이렇게 나열할 수 있을 것 같습니다',
    },
    {
      id: 6,
      image:
        'https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/a5fc0e5d-972d-48b3-e49a-de6c0707c200/intro',
      alt: '기차',
      content:
        '물론 미래에는 안정기라고 생각했던 지금이 과도기의 연속일지도 모릅니다. 적어도 스스로 정의한 과도기를 지난 이후 버릴 옷이 아닌 오래 함께할 수 있는 옷을 사자는 생각으로 구매하고 있습니다. 저는 옷을 잘입는 편이라고 생각하지 않습니다. 하지만 적어도 저는 제 스타일에 만족하며 입고 있습니다. 과거의 저와 같이 경제적・시간적 자원을 낭비할 예정인, 혹은 낭비 중인 사람들을 위해 많은 고민을 했습니다. 그렇게 저는 버릴 옷을 사는 사람들을 위해, 그리고 본인의 스타일을 찾는 사람들을 위해 이 서비스를 만들자 결심했습니다.',
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
    justify-content: space-between;
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
