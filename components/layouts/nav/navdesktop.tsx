import styled from '@emotion/styled';
import useLoggedIn from '@hooks/useLoggedIn';
import Link from 'next/link';

const NavDesktop = () => {
  const data = useLoggedIn();

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
      {data?.ok ? (
        <li>
          <Link href="/cart">장바구니</Link>
        </li>
      ) : null}
      <li>
        {data?.ok ? <Link href="/profile">마이페이지</Link> : <Link href="/login">로그인</Link>}
      </li>
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
