import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

import { representative } from '../../constants/style';
import media from '../../libs/media';

import Product from '.';

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR<Product>(
    router.query.id ? `https://howabout.site/product/${router.query.id}` : null
  );
  const [view, setView] = useState(0);

  const handleView = (content: number): void => {
    setView(content);
  };

  return (
    <ProductDetailWrapper>
      <ProductSummary>
        <ImageWrapper>
          <img
            src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${data?.image}/product`}
            alt="상품 사진"
          />
        </ImageWrapper>
        <InfoWrapper>
          <div>
            <p>{data?.brand}</p>
            <p>{data?.name}</p>
            <p>
              사용권: {data?.rank} [{data?.status ? '대여 가능' : '대여 불가능'}]
            </p>
          </div>
          <div>
            <button>찜 하기</button>
            <button>장바구니 담기</button>
          </div>
        </InfoWrapper>
      </ProductSummary>
      <ButtonWrapper active={view}>
        <button onClick={() => handleView(0)}>상품 설명</button>
        <button onClick={() => handleView(1)}>상품 후기</button>
        <button onClick={() => handleView(2)}>상품 정책</button>
        <button onClick={() => handleView(3)}>문의 사항</button>
      </ButtonWrapper>
      <DescWrapper>
        {view === 0 ? <p>{data?.description}</p> : null}
        {view === 1 ? <p>리뷰</p> : null}
        {view === 2 ? <p>정책</p> : null}
        {view === 3 ? <p>QnA</p> : null}
      </DescWrapper>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;

const ProductDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2%;
  max-width: ${representative.maxWidth};
`;

const ProductSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2%;

  & > div {
    width: 100%;
    ${media.tablet`width:50%`}
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    width: 255px;
    ${media.mobile`width:355px`}
  }
`;

const InfoWrapper = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div:first-of-type {
    padding: 4px;
    ${media.mobile`padding:8px`}

    & > p:first-of-type {
      font-family: serif;
    }

    & > p:nth-of-type(2) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: space-between;

    & > button {
      width: 50%;
      border: none;
      border-radius: 5px;
      background-color: black;
      color: white;
      font-size: 16px;

      margin: 4px;
      ${media.mobile`margin:8px`}
      padding: 0.8rem;
      ${media.mobile`padding:1rem`}
    }
  }
`;

const ButtonWrapper = styled.div<{ active: number }>`
  & > button {
    width: 25%;
    padding: 8px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    border-bottom: 4px solid rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  & > button:nth-of-type(${(props) => props.active + 1}) {
    border-bottom: 4px solid black;
  }
`;

const DescWrapper = styled.div`
  padding-top: 2%;
  word-break: keep-all;

  & > p {
    margin: 0 auto;
    text-align: center;

    ${media.desktop`width:60%`};
  }
`;
