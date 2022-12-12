import styled from '@emotion/styled';
import useLoggedIn from '@hooks/useLoggedIn';
import useSWR from 'swr';
import AdminLayout from '../../../components/admin/common/adminLayout';
import Heading from '../../../components/admin/common/heading';
import AdminProductItem from '../../../components/admin/product/adminProductItem';
import CreateProduct from '../../../components/admin/product/createProduct';
import { BASE_URL } from '../../../constants/server';

interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  image: string;
  status: boolean;
  until: string;
  rank: number;
  description: string;
}

const AdminProductCreate = () => {
  const user = useLoggedIn();
  return (
    <AdminLayout>
      <Heading>상품 등록</Heading>
      <CreateProduct />
    </AdminLayout>
  );
};

export default AdminProductCreate;
