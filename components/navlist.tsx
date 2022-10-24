import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../store';

const NavList = () => {
  const loginState = useRecoilValue(LoginState);

  return (
    <NavListWrapper>
      <li>
        <Link href="/intro">소개</Link>
      </li>
      <li>
        <Link href="/product">상품</Link>
      </li>
      <li>
        <Link href="/style">스타일</Link>
      </li>
      <li>
        <Link href="/subscribe">구독</Link>
      </li>
      <li>
        {loginState ? <Link href="/profile">마이페이지</Link> : <Link href="/login">로그인</Link>}
      </li>
    </NavListWrapper>
  );
};

export default NavList;

const NavListWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  & > li {
    list-style: none;
  }
`;
