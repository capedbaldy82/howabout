import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { BASE_URL } from '../../../constants/server';
import fetchForAuth from '../../../libs/fetchForAuth';
import { MenuState } from '../../../store';
import { NavBarData } from './navbar';

const NavMobile = ({ status, error }: any) => {
  // const { data, error } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);

  const [menu, setMenu] = useRecoilState(MenuState);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <NavMobileWrapper>
      <Link href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Link>
      <button onClick={toggleMenu}>
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
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
        <ul onClick={toggleMenu}>
          <li>
            <Link href="/intro">소개</Link>
          </li>
          <li>
            <Link href="/product">상품</Link>
          </li>
          <li>
            <Link href="/subscribe">구독</Link>
          </li>
          <li>
            {!status && !error ? null : status?.ok ? (
              <Link href="/profile">마이페이지</Link>
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </li>
        </ul>
      ) : null}
    </NavMobileWrapper>
  );
};

export default NavMobile;

const NavMobileWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > svg {
    border: 1px solid black;
    border-radius: 5px;
    width: 28px;
    height: 28px;
    margin-right: 16px;
  }

  & > button {
    width: 28px;
    height: 28px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
  }

  & > ul {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 60px;
    right: 0;
    border-top: 1px solid black;

    & > li {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      height: 50px;
      background-color: #f2f2f2;
      border-bottom: 1px solid black;
      font-weight: 600;

      & > a {
        width: 100%;
      }
    }
  }
`;
