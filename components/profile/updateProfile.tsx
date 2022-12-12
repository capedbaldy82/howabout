import Heading from '@components/admin/common/heading';
import ButtonBig from '@components/common/buttonBig';
import Input from '@components/common/input';
import { regExp } from '@constants/regexp';
import { BASE_URL } from '@constants/server';
import useMutation from '@hooks/useMutation';
import fetchWithAuth from '@libs/fetchWithAuth';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import cookies from 'react-cookies';

interface UpdateProfileFoem {
  name: string;
}

const UpdateProfile = () => {
  const { register, handleSubmit, setValue } = useForm<UpdateProfileFoem>();
  const { data } = useSWR(`${BASE_URL}/auth/userinfo`, fetchWithAuth);
  const [update, { data: UpdateData, error }] = useMutation(
    'POST',
    `${BASE_URL}`,
    cookies.load('accessToken')
  );

  useEffect(() => {
    setValue('name', data?.name);
  }, [data]);

  const onValid = (value: UpdateProfileFoem) => {
    if (!regExp.name.test(value.name)) return;

    // update(value);
  };

  const onUnValid = (error: any) => {};

  return (
    <div>
      <Heading>회원 정보 수정</Heading>
      <form onSubmit={handleSubmit(onValid, onUnValid)}>
        <Input
          register={register('name', { required: true })}
          type="text"
          name="name"
          place="이름"
        />
        <ButtonBig>저장</ButtonBig>
      </form>
    </div>
  );
};

export default UpdateProfile;
