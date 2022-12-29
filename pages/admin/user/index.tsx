import Heading from '@components/admin/common/heading';
import AdminLayout from '@components/admin/common/adminLayout';
import styled from '@emotion/styled';
import useAdminCheck from '@hooks/useAdminCheck';
import UserList from '@components/admin/user/userList';
import useSWRLogin from '@hooks/useSWRLogin';

const User = () => {
  const user = useAdminCheck();
  const login = useSWRLogin();

  return (
    <AdminLayout>
      <AdminUserWrapper>
        <Heading>회원 관리</Heading>
        <UserList />
      </AdminUserWrapper>
    </AdminLayout>
  );
};

export default User;

const AdminUserWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
