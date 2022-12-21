import Heading from '@components/admin/common/heading';
import AdminLayout from '@components/admin/common/adminLayout';
import styled from '@emotion/styled';
import useLoggedIn from '@hooks/useLoggedIn';

const User = () => {
  const user = useLoggedIn();
  return (
    <AdminLayout>
      <AdminUserWrapper>
        <Heading>회원 관리</Heading>
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
