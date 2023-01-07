import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import media from '@libs/media';
import Image from 'next/image';
import cookies from 'react-cookies';
import { useSWRConfig } from 'swr';
import type Product from '../../pages/product';

interface CartProductItemProps {
  id: number;
  image: string;
  name: string;
  brand: string;
  rank: number;
}

const CartProductItem = ({ id, image, name, brand, rank }: CartProductItemProps) => {
  const { mutate } = useSWRConfig();

  const deleteProduct = async (productId: number) => {
    try {
      const token = cookies.load('accessToken');
      const response = await fetch(`${BASE_URL}/auth/cart/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const result = await response.json();

      if (result.ok) {
        mutate(`${BASE_URL}/auth/cart`, (prev: { cart: Product[] }) => {
          cart: prev.cart.filter((product: Product) => product.id !== productId);
        });
      }

      console.log(result);
    } catch (error) {
      alert('네트워크 에러가 발생했습니다');
      console.log(error);
    }
  };

  return (
    <CartProductItemWrapper>
      <ImageWrapper>
        <Image
          src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct`}
          width={150}
          height={150}
        />
      </ImageWrapper>
      <ProductInfoWrapper>
        <p>{brand}</p>
        <p>{name}</p>
      </ProductInfoWrapper>
      <TokenCostWrapper>{rank}</TokenCostWrapper>
      <ButtonWrapper>
        <button onClick={() => deleteProduct(id)}>삭제하기</button>
      </ButtonWrapper>
    </CartProductItemWrapper>
  );
};

export default CartProductItem;

const CartProductItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  font-size: 12px;
  ${media.tablet`font-size:16px`};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 16.6%;
  ${media.tablet`width:14.25%`}
`;

const ProductInfoWrapper = styled.div`
  display: flex;

  flex-direction: column;
  ${media.tablet`flex-direction:row`};

  width: 33.2%;
  ${media.tablet`width:57%`};

  & > p {
    width: 100%;
    ${media.tablet`width:50%`}
    text-align: center;
  }
`;

const TokenCostWrapper = styled.div`
  width: 16.6%;
  ${media.tablet`width:14.25%`}
`;

const ButtonWrapper = styled.div`
  width: 16.6%;
  ${media.tablet`width:14.25%`}

  & > button {
    padding: 6px;
    ${media.tablet`padding:10px`};
    max-width: 80px;
    border: 1px solid black;
    border-radius: 2.5px;
    background-color: black;
    color: white;
    font-size: 12px;
    ${media.tablet`font-size:14px`}
    font-display : swap;
    font-family: 'MICEGothic';
    cursor: pointer;
  }
`;
