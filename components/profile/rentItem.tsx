import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

interface RentedItempProps {
  id: number;
  rented?: boolean;
}

const RentItem = ({ id, rented = false }: RentedItempProps) => {
  const { data } = useSWR(`${BASE_URL}/product/${id}`);

  return (
    <RentItemWrapper rented={rented}>
      {data?.image && (
        <td>
          <Link href={`/product/${id}`}>
            <div>
              <Image
                src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${data.image}/adminproduct`}
                width={200}
                height={200}
              />
            </div>
          </Link>
        </td>
      )}
      <td>{data?.name}</td>
      <td>{data?.brand}</td>
      <td>{data?.rank}</td>
      <td>{rented ? (data?.status ? '가능' : '불가능') : '대여 중'}</td>
    </RentItemWrapper>
  );
};
export default RentItem;

const RentItemWrapper = styled.tr<{ rented: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  background-color: ${({ rented }) => rented && 'rgba(0,0,0,0.1)'};
  & > td {
    text-align: center;
    width: 20%;
  }
`;
