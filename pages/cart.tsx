import Heading from '@components/admin/common/heading';
import CartProductList from '@components/cart/cartProductList';
import BackgroundLayout from '@components/profile/backgroundLayout';
import { NextPage } from 'next';

const Cart: NextPage = () => {
  return (
    <section>
      <BackgroundLayout>
        <Heading line={false}>장바구니</Heading>
        <CartProductList />
      </BackgroundLayout>
    </section>
  );
};

export default Cart;
