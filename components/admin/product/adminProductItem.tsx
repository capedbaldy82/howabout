import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '../../../constants/server';
import cookies from 'react-cookies';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import media from '@libs/media';

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
  const { mutate } = useSWRConfig();

  const deleteProduct = async ({ id, image }: { id: number; image: string }) => {
    if (!confirm(`${name} 제품을 삭제하시겠습니까?`)) return;

    const token = cookies.load('accessToken');
    const response = await fetch(`${BASE_URL}/product/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, image }),
    });

    const result = await response.json();

    console.log(result);

    mutate(
      `${BASE_URL}/product`,
      (prev: Product[]) => prev.filter((product) => id !== product.id),
      false
    );
  };

  return (
    <Li>
      <td>
        <Link href={`/product/${id}`}>
          <div>
            <Image
              src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/adminproduct`}
              width={200}
              height={200}
            />
          </div>
        </Link>
      </td>
      <td>{name}</td>
      <td>{brand}</td>
      {/* <td>{type}</td> */}
      <td>{rank}</td>
      <td>{status ? '가능 ' : `불가능 :${until}`}</td>
      <td>
        <Link
          href={{
            pathname: `/admin/product/${id}`,
            query: {
              id,
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
        <button onClick={() => deleteProduct({ id, image })}>삭제하기</button>
      </td>
    </Li>
  );
};

export default AdminProductItem;

const Li = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;

  & > td {
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: keep-all;
    font-size: 12px;
    ${media.tablet`font-size:16px`};

    & > div {
      position: relative;
      cursor: pointer;
    }
  }

  & > td:nth-of-type(2) {
    width: 25%;
  }

  & > td:last-of-type {
    flex-direction: column;

    & > a,
    button {
      margin-bottom: 12px;
      padding: 6px;
      ${media.tablet`padding:10px`};
      max-width: 80px;
      border: 1px solid black;
      border-radius: 2.5px;
      background-color: black;
      color: white;
      font-size: 12px;
      ${media.tablet`font-size:14px`}
      font-family: 'MICEGothic';
      cursor: pointer;
    }
  }
`;
