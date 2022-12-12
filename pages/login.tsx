import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import Input from '@components/common/input';
import Slogan from '@components/common/slogan';
import Link from 'next/link';
import ButtonBig from '@components/common/buttonBig';
import Line from '@components/common/line';
import media from '../libs/media';
import { useState, useEffect } from 'react';
import FormLayout from '@components/layouts/formlayout';
import { useSetRecoilState } from 'recoil';
import { LoginState, MenuState } from '../store';
import useMutation from '../hooks/useMutation';
import { useRouter } from 'next/router';
import { setCookie } from '../libs/handleCookie';
import { useSWRConfig } from 'swr';
import { BASE_URL } from '../constants/server';
import fetchForAuth from '../libs/fetchForAuth';

interface LoginForm {
  username: string;
  password: string;
}

interface LoginSuccessResult {
  ok: boolean;
  name: string;
  accessToken: string;
}

interface LoginFailResult {
  error: string;
  message: string;
  statusCode: number;
}

const Login: NextPage = () => {
  const setMenuState = useSetRecoilState(MenuState);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const { mutate } = useSWRConfig();
  const [login, { data, loading }] = useMutation('POST', 'https://howabout.site/auth/signin');

  const { register, handleSubmit } = useForm<LoginForm>();

  // 로그인 폼 유효성 검사 통과 시
  const onValid = (validForm: LoginForm) => {
    if (loading) return;

    setErrorMessage('');
    login(validForm);
  };

  // 로그인 폼 유효성 검사 실패 시
  const onUnValid = (error: any) => {
    if (error?.username?.type === 'required') {
      setErrorMessage('아이디를 입력해주세요.');
    } else if (error?.password?.type === 'required') {
      setErrorMessage('비밀번호를 입력해주세요.');
    }
  };

  // 로그인 폼 인증 성공 시
  useEffect(() => {
    if (data?.ok) {
      mutate(`${BASE_URL}/auth/check`, fetchForAuth, true);
      setCookie('accessToken', data.accessToken);
      router.replace('/');
    } else {
      if (data?.error === 'Unauthorized') {
        setErrorMessage('아이디 혹은 비밀번호를 확인해주세요.');
      }
    }
  }, [data]);

  return (
    <FormLayout>
      <h2 className="screen_out">로그인</h2>
      <Slogan slogan logo />
      <form onSubmit={handleSubmit(onValid, onUnValid)}>
        <Input
          type="text"
          place="아이디"
          name="username"
          register={register('username', { required: true })}
        />
        <Input
          type="password"
          place="비밀번호"
          name="password"
          register={register('password', { required: true })}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <ButtonBig>로그인</ButtonBig>
        <Line />
        <Link href="/join">
          <JoinLink onClick={() => setMenuState(false)}>회원가입</JoinLink>
        </Link>
      </form>
    </FormLayout>
  );
};

export default Login;

const JoinLink = styled.p`
  margin-bottom: 120px;
  padding: 12px;
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};
  border: 1px solid black;
  text-align: center;
  color: white;
  font-size: 14px;
  background-color: black;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  margin-bottom: 12px;
  padding-left: 2px;
  color: red;
  font-size: 14px;
`;
