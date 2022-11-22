import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ADMIN_CATEGORY_ARRAY, ADMIN_CATEGORY_OBJECT } from '../../constants/admin';

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
  padding: 16px;
  width: 20%;
  margin-right: 5%;

  & > ul {
    & > li {
      display: flex;
      justify-content: center;
      padding: 8px;
    }

    &
      > li:nth-of-type(${({ route }) => {
          for (let i = 0; i < ADMIN_CATEGORY_ARRAY.length; i++) {
            if (route.includes(ADMIN_CATEGORY_ARRAY[i])) {
              return i + 1;
            }
          }
        }}) {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
