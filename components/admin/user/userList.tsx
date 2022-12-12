import styled from '@emotion/styled';

const UserList = () => {
  return (
    <UserListWrapper>
      <h3>회원 관리</h3>
    </UserListWrapper>
  );
};

export default UserList;

const UserListWrapper = styled.div`
  & > h3 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 600;
  }
`;
