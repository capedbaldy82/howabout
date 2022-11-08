import styled from '@emotion/styled';
import Link from 'next/link';

const NavDesktop = () => {
  return (
    <NavDesktopWrapper>
      <li>
        <Link href="/intro">소개</Link>
      </li>
      <li>
        <Link href="/product">상품</Link>
      </li>
      <li>
        <Link href="/subscribe">구독</Link>
      </li>
      <li>{1 ? <Link href="/profile">마이페이지</Link> : <Link href="/login">로그인</Link>}</li>
    </NavDesktopWrapper>
  );
};

export default NavDesktop;

const NavDesktopWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  & > li {
    list-style: none;
  }
`;
