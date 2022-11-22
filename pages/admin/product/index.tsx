import styled from '@emotion/styled';
import Link from 'next/link';
import useSWR from 'swr';
import AdminLayout from '../../../components/admin/adminLayout';
import Heading from '../../../components/admin/heading';
import AdminProductItem from '../../../components/admin/product/adminProductItem';
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

const AdminProduct = () => {
  const { data } = useSWR(`${BASE_URL}/product`);

  return (
    <AdminLayout>
      <AdminProductWrapper>
        <Heading>상품 관리</Heading>
        <div>
          <Link href="/admin/product/create">상품 등록</Link>
        </div>
        <ProductList>
          {data &&
            data.map((product: Product) => (
              <AdminProductItem
                id={product.id}
                name={product.name}
                brand={product.brand}
                type={product.type}
                image={product.image}
                status={product.status}
                until={product.until}
                rank={product.rank}
                description={product.description}
              />
            ))}
        </ProductList>
      </AdminProductWrapper>
    </AdminLayout>
  );
};

export default AdminProduct;

const AdminProductWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
