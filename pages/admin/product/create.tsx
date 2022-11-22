import styled from '@emotion/styled';
import useSWR from 'swr';
import AdminLayout from '../../../components/admin/adminLayout';
import Heading from '../../../components/admin/heading';
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
  return (
    <AdminLayout>
      <AdminProductWrapper>
        <Heading>상품 등록</Heading>
        <CreateProduct />
      </AdminProductWrapper>
    </AdminLayout>
  );
};

export default AdminProductCreate;

const AdminProductWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
