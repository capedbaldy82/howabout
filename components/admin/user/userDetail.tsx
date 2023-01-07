import { BASE_URL } from '@constants/server';
import styled from '@emotion/styled';
import fetchWithAuth from '@libs/fetchWithAuth';
import media from '@libs/media';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import cookies from 'react-cookies';

const UserDetail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR(
    router.query.id ? `${BASE_URL}/auth/userinfo/${router.query.id}` : null,
    fetchWithAuth
  );

  useEffect(() => {
    if (data && !data.ok) {
      alert('네트워크 통신 오류');
      router.push('/admin/user');
    }
  }, [data]);

  const approveSubscribe = async () => {
    if (!data.user.apply) return;

    const token = cookies.load('accessToken');
    if (!data.user.apply) return;

    const response = await fetch(`${BASE_URL}/auth/subscribe/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        applicant: data.user.id,
        tier: data.user.apply,
      }),
    }).then((res) => res.json());

    if (!response.ok) {
      alert('잘못된 요청입니다.');
    } else {
      alert('정상 승인되었습니다.');
      const token = data.user.apply === 'basic' ? 3 : data.user.apply === 'standard' ? 5 : 8;
      mutate({ ...data, data: { user: { token, tier: data.user.apply } } });
    }

    console.log(response);
    console.log('구독 승인');
  };
  const denySubscribe = async () => {
    if (!data.user.apply) return;

    const token = cookies.load('accessToken');
    if (!data.user.apply) return;

    const response = await fetch(`${BASE_URL}/auth/subscribe/deny`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        applicant: data.user.id,
      }),
    }).then((res) => res.json());

    if (!response.ok) {
      alert('잘못된 요청입니다.');
    } else {
      alert('정상 승인되었습니다.');
    }

    console.log(response);

    console.log('구독 거절');
  };
  const approveProduct = async () => {
    if (!data.user.order) return;

    const token = cookies.load('accessToken');

    const response = await fetch(`${BASE_URL}/auth/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        applicant: data.user.id,
        product: data.user.order,
      }),
    }).then((res) => res.json());

    if (!response.ok) {
      alert('잘못된 요청입니다.');
    } else {
      alert('정상 승인되었습니다.');
    }

    console.log(response);

    console.log('상품 승인');
  };

  const denyProduct = async () => {
    if (!data.user.order) return;

    const token = cookies.load('accessToken');

    const response = await fetch(`${BASE_URL}/auth/deny`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        applicant: data.user.id,
        product: data.user.order,
      }),
    }).then((res) => res.json());

    mutate({ ...data, user: { order: null } });

    if (!response.ok) {
      alert('잘못된 요청입니다.');
    } else {
      alert('정상 거부되었습니다.');
    }

    console.log(response);
    console.log('상품 거절');
  };

  return (
    <UserDetailWrapper>
      <tbody>
        <tr>
          <td>회원 번호</td>
          <td>{data?.user?.id}</td>
        </tr>
        <tr>
          <td>회원 이름</td>
          <td>{data?.user?.name}</td>
        </tr>
        <tr>
          <td>회원 등급</td>
          <td>{data?.user?.tier}</td>
        </tr>
        <tr>
          <td>보유 토큰</td>
          <td>{data?.user?.token}</td>
        </tr>
        <tr>
          <td>휴대폰 번호</td>
          <td>{data?.user?.phone}</td>
        </tr>
        <tr>
          <td>주소</td>
          <td>{data?.user?.address}</td>
        </tr>
        <tr>
          <td>구독 신청</td>
          <td>{data?.user?.apply}</td>
          <td onClick={() => approveSubscribe()}>구동 승인</td>
          <td onClick={() => denySubscribe()}>구독 거절</td>
        </tr>
        <tr>
          <td>상품 신청</td>
          <td>{data?.user?.order?.join(', ')}</td>
          <td onClick={() => approveProduct()}>상품 승인</td>
          <td onClick={() => denyProduct()}>상품 거절</td>
        </tr>
      </tbody>
    </UserDetailWrapper>
  );
};

export default UserDetail;

const UserDetailWrapper = styled.table`
  width: 100%;

  & > tbody {
    & > tr {
      display: flex;
      padding: 8px;

      & > td + td {
        margin-left: 8px;
      }

      & > td {
        display: flex;
        padding: 8px;
        font-size: 12px;
        border: 1px solid gray;
        ${media.tablet`font-size:14px`}
      }

      & > td:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        ${media.tablet`width:15%`};
        min-width: 80px;
        ${media.tablet`min-width:100px`};
      }

      & > td:nth-of-type(2) {
        width: calc(83% + 16px);
      }

      & > td:nth-of-type(3),
      td:nth-of-type(4) {
        margin-left: 8px;
        border: 1px solid black;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        min-width: 65px;
        ${media.tablet`min-width:80px`};
        padding: 6px;
        ${media.tablet`padding:10px`};
        border-radius: 2.5px;
        background-color: #000;
        color: #fff;
        font-size: 12px;
        ${media.tablet`font-size:14px`}
        font-family: 'MICEGothic';
      }
    }

    & > tr:nth-of-type(7),
    tr:nth-of-type(8) {
      & > td:nth-of-type(2) {
        width: 63%;
      }
    }
  }
`;
