import type { NextPage } from 'next';

import styled from '@emotion/styled';
import useSWR from 'swr';

import ProductItem from '../../components/product/productItem';

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

const Product: NextPage = () => {
  const { data, error } = useSWR<Product[]>(`https://howabout.site/product`);

  return (
    <HomeWrapper>
      <h2 className="screen_out">Product</h2>
      <ProductList>
        {data &&
          data.map((product: Product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              brand={product.brand}
              rank={product.rank}
              status={product.status}
              name={product.name}
            />
          ))}
      </ProductList>
    </HomeWrapper>
  );
};

export default Product;

const HomeWrapper = styled.section`
  margin: 0px auto;
  max-width: 1420px;
`;

const ProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  padding-top: 2%;
  padding-right: 2%;
  padding-left: 2%;
`;
