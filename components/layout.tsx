import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import media from '../libs/client/media';
import { color } from '../constants';

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
        <nav>
          <Link href="/intro">소개</Link>
          <Link href="/subscribe">구독</Link>
          <Link href="/review">후기</Link>
          <Link href="/login">로그인</Link>
        </nav>
      </Header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

const Header = styled.header`
  display: flex;
  padding: 0.8rem;
  background-color: tan;
  border: 1px solid blue;

  ${media.tablet`padding:1.2rem`}
  ${media.desktop`padding:1.6rem`}

  & > h1 {
    width: 50%;
  }

  & > nav {
    width: 50%;
  }
`;
