import styled from '@emotion/styled';
import useSWR from 'swr';
import { BASE_URL } from '../../../constants/server';
import { sizes } from '../../../libs/media';
import fetchForAuth from '../../../libs/fetchForAuth';
import NavDesktop from './navdesktop';
import NavMobile from './navmobile';
import fetchWithAuth from '@libs/fetchWithAuth';
import useLoggedIn from '@hooks/useLoggedIn';

export interface NavBarData {
  ok?: boolean | undefined;
}

const NavBar = ({ size }: { size: number }) => {
  const { data, error } = useSWR(`${BASE_URL}/auth/check`, fetchForAuth);

  return (
    <NavWrapper>
      {size < parseInt(sizes.tablet) ? <NavMobile status={data} /> : <NavDesktop />}
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 50%;
`;
