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
  position: relative;
  ${media.tablet`position:static`}
  ${media.tablet`display: flex`};
  ${media.tablet`flex-direction:row`};
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 48px;
  width: 100%;
  max-width: ${representative.maxWidth};
`;

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
`;
