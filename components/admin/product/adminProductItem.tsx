import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

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

const AdminProductItem = ({
  id,
  name,
  brand,
  type,
  image,
  status,
  until,
  rank,
  description,
}: Product) => {
  return (
    <Li>
      <ProductImage>
        <Image src={image} width={200} height={200} layout="intrinsic" />
      </ProductImage>
      <ProductContent>
        <ProductInfo>
          <p>{name}</p>
          <p>{brand}</p>
          <p>{type}</p>
          <p>{rank}</p>
          <p>{status ? '가능 ' : `불가능 :${until}`}</p>
        </ProductInfo>
        <ProductControl>
          <Link
            href={{
              pathname: `/admin/product/${id}`,
              query: {
                name,
                brand,
                type,
                image,
                status,
                until,
                rank,
                description,
              },
            }}
            as={`/admin/product/${id}`}>
            수정하기
          </Link>
          <button>삭제하기</button>
        </ProductControl>
      </ProductContent>
    </Li>
  );
};

export default AdminProductItem;

const Li = styled.li`
  display: flex;
  border: 1px solid black;
`;

const ProductImage = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 8px;
  border: 1px solid black;
`;

const ProductContent = styled.div`
  padding: 8px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid orange;
`;

const ProductControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  border: 1px solid aqua;
`;
