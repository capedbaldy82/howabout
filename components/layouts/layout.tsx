import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import media, { customMedia, sizes } from '../../libs/client/media';
import NavMenu from '../navmenu';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginState, MenuState } from '../../store';
import NavList from '../navlist';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menu, setMenu] = useRecoilState(MenuState);
  const [size, setSize] = useState(0);
  const loginState = useRecoilValue(LoginState);

  useEffect(() => {
    setSize(window.outerWidth);
  }, []);

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
      <HeaderWrapper>
        <Header>
          <h1 onClick={() => setMenu(false)}>
            <Link href="/">HowAbout</Link>
          </h1>
          {size < parseInt(sizes.tablet) ? (
            <NavMenu menuState={menu} menuToggle={onToggleMenu} />
          ) : (
            <NavList />
          )}
        </Header>
      </HeaderWrapper>
      <main>{children}</main>
      <Footer>
        <ul>
          <li>CapedBaldy Inc. | HowAbout</li>
          <li>인천광역시 부평구 창휘로 17 | capedbaldman82@gmail.com</li>
          <li>Copryright © 2022 CapedBaldy Inc.</li>
        </ul>
      </Footer>
    </div>
  );
};

export default Layout;

const HeaderWrapper = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 10%;
  background-color: white;
  max-width: 1620px;
  margin: 0 auto;

  padding: 1rem;
  ${media.tablet`padding:2rem`}
  ${media.tablet`height:70px`}

  & > h1 {
    font-size: 28px;
    width: 50%;
  }

  & > nav {
    width: 50%;
  }
`;

const Footer = styled.footer`
  padding: 32px;
  height: 200px;
  color: white;
  background-color: black;

  & > ul {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    & > li {
      margin-bottom: 16px;
    }
  }
`;
