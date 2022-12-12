import AdminProductItem from '@components/admin/product/adminProductItem';
import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import Product from 'pages/product';
import useSWR from 'swr';

const AdminProductList = () => {
  const { data } = useSWR(`${BASE_URL}/product`);

  return (
    <table>
      <ProductTableHead>
        <tr>
          <th>사진</th>
          <th>상품명</th>
          <th>브랜드</th>
          {/* <th>종류</th> */}
          <th>토큰</th>
          <th>상태</th>
          <th>수정</th>
        </tr>
      </ProductTableHead>
      <tbody>
        {data &&
          data.map((product: Product) => (
            <AdminProductItem
              key={product.id}
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
      </tbody>
    </table>
  );
};

export default AdminProductList;

const ProductTableHead = styled.thead`
  border-top: 3px solid rgba(0, 0, 0);
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);

  & > tr {
    display: flex;
    justify-content: space-between;

    & > th {
      padding-top: 16px;
      padding-bottom: 16px;
      width: 12.5%;
    }

    & > th:nth-of-type(2) {
      width: 25%;
    }
  }
`;
