import Heading from '@components/admin/common/heading';
import RentItem from '@components/profile/rentItem';
import styled from '@emotion/styled';
import useUserInfo from '@hooks/useUserInfo';
import { Suspense } from 'react';

const RentedClothes = () => {
  const data = useUserInfo();

  return (
    <div>
      <Heading>의류 대여 상태</Heading>
      <Table>
        <thead>
          <tr>
            <th>상품 사진</th>
            <th>상품 이름</th>
            <th>브랜드</th>
            <th>토큰</th>
            <th>상품 상태</th>
          </tr>
        </thead>
        <tbody>
          {data?.user?.rent &&
            data.user.rent.map((product: number) => (
              <Suspense fallback="loading.." key={product}>
                <RentItem id={product} />
              </Suspense>
            ))}
          {data?.user?.rented &&
            data.user.rented.map((product: number) => (
              <Suspense fallback="loading.." key={product}>
                <RentItem id={product} rented={true} />
              </Suspense>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RentedClothes;

const Table = styled.table`
  width: 100%;

  & > thead {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    & > tr {
      display: flex;
      width: 100%;

      & > th {
        width: 20%;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
