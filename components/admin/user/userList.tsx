import UserItem from '@components/admin/user/userItem';
import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import fetchWithAuth from '@libs/fetchWithAuth';
import useSWR from 'swr';

const UserList = () => {
  const { data } = useSWR(`${BASE_URL}/auth/alluserinfo`, fetchWithAuth);

  return (
    <UserTable>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>회원 등급</th>
          <th>신청 등급</th>
          <th>주문 상품</th>
          <th>대여 상품</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.users.map((user: any) => (
            <UserItem
              key={user.id}
              userId={user.id}
              name={user.name}
              tier={user.tier}
              apply={user.apply}
              order={user.order}
              rent={user.rent}
            />
          ))}
      </tbody>
    </UserTable>
  );
};

export default UserList;

const UserTable = styled.table`
  & > tbody > tr + tr {
    margin-top: 16px;
  }

  & > thead > tr {
    display: flex;
    margin-bottom: 16px;

    & > th:first-of-type {
      width: 5%;
    }

    & > th {
      display: flex;
      justify-content: center;
      padding-top: 16px;
      padding-bottom: 16px;
      width: 19%;
      font-weight: 600;
    }
  }
`;
