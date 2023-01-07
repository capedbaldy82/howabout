import styled from '@emotion/styled';
import media from '@libs/media';
import Link from 'next/link';

const AdminButton = () => {
  return (
    <Link href="/admin/product">
      <AdminButtonWrapper>어드민</AdminButtonWrapper>
    </Link>
  );
};

export default AdminButton;

const AdminButtonWrapper = styled.div`
  padding: 12px;
  color: white;
  border: 1px solid white;
  background-color: black;
  cursor: pointer;
  font-display: swap;
  font-family: 'MICEGothic';
`;
