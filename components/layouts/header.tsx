import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { MenuState } from '../../store';
import Link from 'next/link';
import media, { sizes } from '../../libs/media';
import NavMobile from './nav/navmobile';
import NavDesktop from './nav/navdesktop';
import { Suspense } from 'react';
import NavBar from './nav/navbar';

const Header = () => {
  const [menu, setMenu] = useRecoilState(MenuState);
  const [size, setSize] = useState(0);

  // 사이즈 최초값 설정
  useEffect(() => {
    setSize(window.outerWidth);
  }, []);

  // 사이즈에 따른 NavBar 컴포넌트 조정
  const checkSize = () => {
    setSize(window.outerWidth);
    if (size > parseInt(sizes.tablet) - 1) {
      setMenu(false);
    }
  };

  // 미디어 쿼리를 위한 조절
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <BoxShadow>
      <HeaderWrapper>
        <h1 onClick={() => setMenu(false)}>
          <Link href="/">HowAbout</Link>
        </h1>
        <NavBar size={size} />
      </HeaderWrapper>
    </BoxShadow>
  );
};

export default Header;

const BoxShadow = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const HeaderWrapper = styled.header`
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
`;
