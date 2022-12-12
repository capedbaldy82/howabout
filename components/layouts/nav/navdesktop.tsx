import styled from '@emotion/styled';
import Link from 'next/link';
import { Suspense } from 'react';
import useSWR from 'swr';
import { BASE_URL } from '../../../constants/server';
import fetchForAuth from '../../../libs/fetchForAuth';
import { NavBarData } from './navbar';

const NavDesktop = ({ status, error }: any) => {
  // const { data, error } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);

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
      <Suspense>
        <li>
          {!status && !error ? null : status?.ok ? (
            <Link href="/profile">마이페이지</Link>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </li>
      </Suspense>
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
