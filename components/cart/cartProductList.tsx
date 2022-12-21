import CartProductItem from '@components/cart/cartProductItem';
import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import fetchWithAuth from '@libs/fetchWithAuth';
import media from '@libs/media';
import type Product from 'pages/product';
import useSWR from 'swr';

const CartProductList = () => {
  const { data } = useSWR<{ cart: Product[] }>(`${BASE_URL}/auth/cart`, fetchWithAuth);

  return (
    <CartProductTable>
      <CartProductTHead>
        <p>상품 사진</p>
        <div>
          <p>브랜드</p>
          <p>상품 이름</p>
        </div>
        <p>필요 토큰</p>
        <p>상품 관리</p>
      </CartProductTHead>
      <CartProductTBody>
        {data &&
          data.cart &&
          data.cart.map((product: Product) => (
            <CartProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              brand={product.brand}
              rank={product.rank}
            />
          ))}
      </CartProductTBody>
    </CartProductTable>
  );
};

export default CartProductList;

const CartProductTable = styled.div`
  padding: 16px;
  width: 100%;
`;

const CartProductTHead = styled.div`
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 16.6%;
    ${media.tablet`width:14.25%`}
    word-break: keep-all;
  }

  & > div {
    display: flex;
    flex-direction: column;
    ${media.tablet`flex-direction:row`};
    justify-content: center;
    align-items: center;
    width: 32.3%;
    ${media.tablet`width:57%`};

    & > p {
      text-align: center;
      width: 100%;
      ${media.tablet`width:50%`};
    }
  }
`;

const CartProductTBody = styled.div``;
