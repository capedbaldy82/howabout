import styled from '@emotion/styled';
import Link from 'next/link';
import { representative } from '../../constants/style';
import media from '../../libs/media';

const Banner = () => {
  return (
    <BannerWrapper>
      <div>
        <h2 className="screen_out">배너</h2>
        <p>당신의 새로운 스타일을 위한</p>
        <p>부담없는 경험</p>
        <p>HowAbout</p>
        <p>현재 개발 중입니다.</p>
      </div>
      <div>
        {/* <Link href="/product">상품 둘러보기</Link>
        <Link href="/style">스타일 둘러보기</Link> */}
      </div>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.article`
  background-color: black;

  & > div:first-of-type {
    /* 슬로건 */
    margin: 0 auto;
    color: white;
    max-width: ${representative.maxWidth};

    padding: 16px;
    ${media.tablet`padding:32px`};
    line-height: 60px;
    ${media.tablet`line-height:120px`};

    & > p {
      white-space: nowrap;
      font-family: 'MICEGothic';

      font-size: 28px;
      ${media.tablet`font-size:48px`};
    }

    & > p:last-of-type {
      font-size: 28px;
      color: red;
    }
  }

  & > div:last-of-type {
    display: flex;
    margin: 0 auto;
    max-width: ${representative.maxWidth};

    padding: 16px;
    ${media.tablet`padding:2rem`};
    ${media.tablet`justify-content:flex-end`};

    & > a {
      background-color: white;
      border-radius: 5px;
      cursor: pointer;

      padding: 0.8rem;
      ${media.tablet`padding:1rem`};
    }

    & > a:first-of-type {
      margin-right: 1rem;
    }
  }
`;
