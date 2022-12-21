import AdminLayout from '@components/admin/common/adminLayout';
import Heading from '@components/admin/common/heading';
import styled from '@emotion/styled';

const Rent = () => {
  return (
    <AdminLayout>
      <AdminRentWrapper>
        <Heading>대여 관리</Heading>
      </AdminRentWrapper>
    </AdminLayout>
  );
};

export default Rent;

const AdminRentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
