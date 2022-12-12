import styled from '@emotion/styled';
import { useState } from 'react';
import { representative } from '../../../constants/style';
import media from '../../../libs/media';
import AdminNav from './adminNav';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <AdminLayoutWrapper>
      <AdminNav />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;

const AdminLayoutWrapper = styled.section`
  ${media.tablet`display: flex`};
  min-height: 800px;
  ${media.tablet`flex-direction:row`};
  margin: 0 auto;
  margin-top: 48px;
  width: 100%;
  max-width: ${representative.maxWidth};
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid blue;
  padding: 16px;
`;
