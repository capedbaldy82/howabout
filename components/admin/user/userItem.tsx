import styled from '@emotion/styled';
import Link from 'next/link';

interface UserItemProps {
  userId: number;
  name: string | null;
  tier: string | null;
  apply: string | null;
  order: number[] | null;
  rent: string | null;
}

const UserItem = ({ userId, name, tier, apply, order, rent }: UserItemProps) => {
  return (
    <Link href={`/admin/user/${userId}`}>
      <UserItemWrapper>
        <td>{userId}</td>
        <td>{name}</td>
        <td>{tier}</td>
        <td>{apply || '-'}</td>
        <td>{order ? order.join(', ') : '-'}</td>
        <td>{rent || '-'}</td>
      </UserItemWrapper>
    </Link>
  );
};

export default UserItem;

const UserItemWrapper = styled.tr`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  & > td:first-of-type {
    width: 5%;
  }

  & > td {
    display: flex;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 19%;
  }
`;
