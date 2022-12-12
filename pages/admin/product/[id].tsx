import styled from '@emotion/styled';
import useLoggedIn from '@hooks/useLoggedIn';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/common/adminLayout';
import Heading from '../../../components/admin/common/heading';
import ReviseProduct from '../../../components/admin/product/reviseProduct';

const AdminProductRevise = () => {
  const router = useRouter();
  const user = useLoggedIn();

  return (
    <AdminLayout>
      <AdminProductReviseWrapper>
        <Heading>상품 수정</Heading>
        <ReviseProduct />
      </AdminProductReviseWrapper>
    </AdminLayout>
  );
};

export default AdminProductRevise;

const AdminProductReviseWrapper = styled.div`
  width: 100%;
`;
