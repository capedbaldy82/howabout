import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import Input from '../components/input';
import Slogan from '../components/slogan';
import Link from 'next/link';
import ButtonBig from '../components/buttonBig';
import Line from '../components/line';
import media from '../libs/client/media';
import { useState, useEffect } from 'react';
import FormLayout from '../components/layouts/formlayout';
import { useSetRecoilState } from 'recoil';
import { LoginState, MenuState, ProfileState } from '../store';
import useMutation from '../libs/server/useMutation';
import { useRouter } from 'next/router';

interface LoginForm {
  username: string;
  password: string;
}

interface LoginMutation {
  ok: boolean;
  accessToken: string;
  name: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const setMenuState = useSetRecoilState(MenuState);
  const setLoginState = useSetRecoilState(LoginState);

  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, watch } = useForm<LoginForm>();
  const [login, { data, loading, error }] = useMutation<LoginMutation>(
    'POST',
    'https://howabout.site/auth/signin'
  );

  // 로그인 폼 유효성 검사 통과 시
  const onValid = (validForm: LoginForm) => {
    setErrorMessage('');
    console.log(validForm);
    login(validForm);
  };

  // 로그인 폼 유효성 검사 실패 시
  const onUnValid = (error: any) => {
    console.log(error);
    if (error?.username?.type === 'required') {
      setErrorMessage('아이디를 입력해주세요.');
    } else if (error?.password?.type === 'required') {
      setErrorMessage('비밀번호를 입력해주세요.');
    }
  };

  // 로그인 폼 인증 성공 시
  useEffect(() => {
    if (data?.ok) {
      setLoginState(true);
      localStorage.setItem('token', data.accessToken);
      router.replace('/');
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
