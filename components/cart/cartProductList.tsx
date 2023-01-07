import CartProductItem from '@components/cart/cartProductItem';
import ButtonBig from '@components/common/buttonBig';
import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import fetchWithAuth from '@libs/fetchWithAuth';
import media from '@libs/media';
import type Product from 'pages/product';
import useSWR from 'swr';
import cookies from 'react-cookies';
import useUserInfo from '@hooks/useUserInfo';

const CartProductList = () => {
  const { data, mutate } = useSWR<{ cart: Product[] }>(`${BASE_URL}/auth/cart`, fetchWithAuth);
  const userInfo = useUserInfo();

  const orderProductsInCart = async () => {
    if (data?.cart.length === 0) {
      alert('장바구니에 상품이 존재하지 않습니다');
      return;
    }

    const tokenToOrder =
      data?.cart.reduce((tokens, product: Product) => tokens + product.rank, 0) || 0;

    if (userInfo.user.token < tokenToOrder) {
      alert('토큰 수가 모자랍니다.');
      return;
    }

    const products = data?.cart.map((product: Product) => product.id);

    const token = cookies.load('accessToken');

    if (!confirm('해당 상품들을 주문 하시겠습니까?')) {
      return;
    }

    const response = await fetch(`${BASE_URL}/auth/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product: products }),
    });

    const result = await response.json();

    mutate({ ...data, cart: [] });

    if (result.ok) {
      alert('정상적으로 주문 되었습니다.');
    }
  };

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
      <OrderButtonWrapper>
        <ButtonBig onClick={() => orderProductsInCart()}>신청하기</ButtonBig>
      </OrderButtonWrapper>
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

const OrderButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  ${media.tablet`margin-top:64px`};
  width: 100%;
`;
