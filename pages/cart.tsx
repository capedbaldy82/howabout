import Heading from '@components/admin/common/heading';
import CartProductList from '@components/cart/cartProductList';
import ButtonBig from '@components/common/buttonBig';
import BackgroundLayout from '@components/profile/backgroundLayout';
import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import useMutation from '@hooks/useMutation';
import media from '@libs/media';
import { NextPage } from 'next';

const Cart: NextPage = () => {
  return (
    <section>
      <BackgroundLayout>
        <Heading line={false}>장바구니</Heading>
        <CartProductList />
        <OrderButtonWrapper>
          <ButtonBig>신청하기</ButtonBig>
        </OrderButtonWrapper>
      </BackgroundLayout>
    </section>
  );
};

export default Cart;

const OrderButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  ${media.tablet`margin-top:64px`};
  width: 100%;
`;
