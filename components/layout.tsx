import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import media from '../libs/client/media';
import NavMenu from './navmenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>
        <h1>
          <Link href="/">HowAbout</Link>
        </h1>
        <NavMenu />
        {/* <nav>
          <Link href="/intro">소개</Link>
          <Link href="/subscribe">구독</Link>
          <Link href="/review">후기</Link>
          <Link href="/login">로그인</Link>
        </nav> */}
      </Header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 50px;
  background-color: tan;

  ${media.tablet`height:70px`}
  ${media.tablet`padding:1.2rem`}

  & > h1 {
    width: 50%;
  }

  & > nav {
    width: 50%;
  }
`;
