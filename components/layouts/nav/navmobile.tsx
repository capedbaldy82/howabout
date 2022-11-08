import styled from '@emotion/styled';
import Link from 'next/link';

interface NavMobileProps {
  menuState: boolean;
  menuToggle: () => void;
}

const NavMobile = ({ menuState, menuToggle }: NavMobileProps) => {
  return (
    <NavMobileWrapper>
      <button onClick={menuToggle}>
        {menuState ? (
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
      {menuState ? (
        <ul onClick={menuToggle}>
          <li>
            <Link href="/intro">소개</Link>
          </li>
          <li>
            <Link href="/product">상품</Link>
          </li>
          <li>
            <Link href="/subscribe">구독</Link>
          </li>
          <li>{1 ? <Link href="/profile">마이페이지</Link> : <Link href="/login">로그인</Link>}</li>
        </ul>
      ) : null}
    </NavMobileWrapper>
  );
};

export default NavMobile;

const NavMobileWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

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
