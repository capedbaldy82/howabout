import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';

import { color } from '../constants';

const NavMenu = () => {
  const [menu, setMenu] = useState(false);
  const ToggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <NavWrapper>
      <button onClick={ToggleMenu}>
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {menu ? (
        <ul>
          <li onClick={ToggleMenu}>
            <Link href="/intro">소개</Link>
          </li>
          <li onClick={ToggleMenu}>
            <Link href="/subscribe">구독</Link>
          </li>
          <li onClick={ToggleMenu}>
            <Link href="/review">후기</Link>
          </li>
          <li onClick={ToggleMenu}>
            <Link href="/login">로그인</Link>
          </li>
        </ul>
      ) : null}
    </NavWrapper>
  );
};

export default NavMenu;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > button {
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
  }

  & > ul {
    width: 100%;
    position: fixed;
    top: 50px;
    right: 0;

    & > li {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      height: 40px;
      background-color: white;
    }

    & > li {
      border-bottom: 1px solid ${color.signature};
    }
  }
`;
