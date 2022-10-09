import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import media, { sizes } from '../libs/client/media';
import NavMenu from './navmenu';
import { useEffect } from 'react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(0);

  const checkSize = () => {
    setSize(window.outerWidth);
    if (size > parseInt(sizes.tablet) - 1) {
      setMenu(false);
    }
  };

  const onToggleMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div>
      <Header>
        <h1 onClick={onToggleMenu}>
          <Link href="/">HowAbout</Link>
        </h1>
        {size < parseInt(sizes.tablet) ? (
          <NavMenu menuState={menu} menuToggle={onToggleMenu} />
        ) : (
          <NavList>
            <Link href="/intro">소개</Link>
            <Link href="/subscribe">구독</Link>
            <Link href="/review">후기</Link>
            <Link href="/login">로그인</Link>
          </NavList>
        )}
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
  padding: 1.2rem;
  height: 10%;
  border-bottom: 1px solid black;
  background-color: white;

  ${media.tablet`height:70px`}
  ${media.tablet`padding:1.2rem`}

  & > h1 {
    font-size: 28px;
    width: 50%;
  }

  & > nav {
    width: 50%;
  }
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-around;
`;
