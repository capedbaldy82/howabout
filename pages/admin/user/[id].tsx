import AdminLayout from '@components/admin/common/adminLayout';
import Heading from '@components/admin/common/heading';
import UserDetail from '@components/admin/user/userDetail';
import styled from '@emotion/styled';
import { NextPage } from 'next';

const UserDetailPage: NextPage = () => {
  return (
    <AdminLayout>
      <AdminUserWrapper>
        <Heading>회원 관리</Heading>
        <UserDetail />
      </AdminUserWrapper>
    </AdminLayout>
  );
};

export default UserDetailPage;

const AdminUserWrapper = styled.section``;
