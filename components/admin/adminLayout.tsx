import styled from '@emotion/styled';
import { useState } from 'react';
import { representative } from '../../constants/style';
import media from '../../libs/client/media';
import AdminNav from './adminNav';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <AdminLayoutWrapper>
      <AdminNav />
      {children}
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;

const AdminLayoutWrapper = styled.section`
  border: 1px solid red;
  min-height: 800px;
  display: flex;
  ${media.tablet`flex-direction:row`};
  margin: 0 auto;
  margin-top: 48px;
  width: 100%;
  max-width: ${representative.maxWidth};
`;
