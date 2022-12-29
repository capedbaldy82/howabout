import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ADMIN_CATEGORY_ARRAY, ADMIN_CATEGORY_OBJECT } from '../../../constants/admin';
import media from '@libs/media';

const AdminNav = () => {
  const router = useRouter();

  return (
    <AdminNavWrapper route={router.route}>
      <ul>
        {ADMIN_CATEGORY_OBJECT.map((category) => (
          <li key={category.id}>
            <Link href={category.href}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </AdminNavWrapper>
  );
};

export default AdminNav;

const AdminNavWrapper = styled.nav<{ route: string }>`
  background-color: white;
  position: sticky;
  top: 0px;
  left: 0px;
  ${media.tablet`position:relative`};
  width: 100%;
  min-width: 140px;
  ${media.tablet`width: 20%`};
  ${media.tablet`margin-right: 5%`};
  font-size: 14px;
  ${media.tablet`font-size:16px`};

  & > ul {
    position: static;
    ${media.tablet`position:sticky`};
    top: 16px;
    left: 0px;
    display: flex;
    ${media.tablet`display:block`};
    & > li {
      display: flex;
      justify-content: center;
      padding: 16px;
      width: calc(100% / ${ADMIN_CATEGORY_ARRAY.length});
      ${media.tablet`width:auto`};
    }

    &
      > li:nth-of-type(${({ route }) => {
          for (let i = 0; i < ADMIN_CATEGORY_ARRAY.length; i++) {
            if (route.includes(ADMIN_CATEGORY_ARRAY[i])) {
              return i + 1;
            }
          }
        }}) {
      font-size: 16px;
      font-weight: 600;
      ${media.tablet`font-size:18px`};
      ${media.tablet`font-weight:700px`};
    }
  }
`;
