import styled from '@emotion/styled';
import Link from 'next/link';
import AdminLayout from '../../../components/admin/common/adminLayout';
import Heading from '../../../components/admin/common/heading';
import AdminProductList from '@components/admin/product/adminProductList';
import media from '@libs/media';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@constants/server';
import useAdminCheck from '@hooks/useAdminCheck';
import useLoggedIn from '@hooks/useLoggedIn';

const AdminProduct = () => {
  const user = useLoggedIn();
  const admincheck = useAdminCheck();

  return (
    <AdminLayout>
      <Heading>상품 관리</Heading>
      <ProductAddtionalControl>
        <ProductCreateButton>
          <Link href="/admin/product/create">상품 등록</Link>
        </ProductCreateButton>
      </ProductAddtionalControl>
      <AdminProductList />
    </AdminLayout>
  );
};

export default AdminProduct;

const ProductAddtionalControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ProductCreateButton = styled.div`
  display: flex;
  justify-content: center;
  width: 12.5%;
  min-width: 60px;

  & a {
    margin-bottom: 24px;
    padding: 6px;
    ${media.tablet`padding:10px`};
    max-width: 80px;
    border-radius: 2.5px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    ${media.tablet`font-size:14px`}
    font-family: 'MICEGothic';
    text-align: center;
  }
`;
