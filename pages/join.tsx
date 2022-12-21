import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';

import Input from '@components/common/input';
import FormLayout from '@components/layouts/formlayout';
import Slogan from '@components/common/slogan';
import media from '../libs/media';
import { BASE_URL } from '../constants/server';
import { modalStyle } from '../constants/style';
import { regExp } from '../constants/regexp';
import ButtonBig from '@components/common/buttonBig';
import useMutation from '../hooks/useMutation';
import { useRouter } from 'next/router';

interface JoinForm {
  username: string;
  password: string;
  passwordCheck: string;
  name: string;
  birth: string;
  phone: string;
  usernumber: string;
  address: string;
  addressDetail: string;
}

const JoinInputList: { [key: string]: string } = {
  username: '아이디',
  password: '비밀번호',
  passwordCheck: '비밀번호 확인',
  name: '이름',
  birth: '생년월일',
  phone: '휴대폰 번호',
  usernumber: '인증번호',
  address: '주소',
  addressDetail: '상세 주소',
};

const Join: NextPage = () => {
  const { register, handleSubmit, watch, setValue } = useForm<JoinForm>();
  const [idCheck, { data, loading }] = useMutation('POST', `${BASE_URL}/auth/checkid`);

  // 개인 정보 동의
  const [isAgrre, setIsAgree] = useState(false);
  // 휴대폰 인증 완료 상태
  const [isVerified, setIsVerified] = useState(true);
  // 인증 번호 요청
  const [isGetNumber, setIsGetNumber] = useState(false);
  // 실제 인증 번호
  const [realNumber, setRealNumber] = useState('');
  // 아이디 중복
  const [idExist, setIdExist] = useState(false);
  // 아이디 유효성 및 중복 메세지
  const [idMessage, setIdMessage] = useState('');
  // 아이디 외 유효성 관련 메세지
  const [errorMessage, setErrorMessage] = useState('');
  // 이름 유효성 상태
  const [isNameOk, setIsNameOk] = useState(false);

  // 아이디 중복 체크 시 아규먼트
  const username = watch('username');
  // 인증 번호 전송 시 아규먼트
  const phone = watch('phone');
  // 비밀번호 확인 일치 여부 비교 값
  const password = watch('password');
  // 이름 유효성 검사
  const name = watch('name');
  // 사용자가 입력한 인증 번호 값
  const userNumber = watch('usernumber');
  // 회원가입 성공 시 홈으로 이동
  const router = useRouter();

  const [join, { data: joinData }] = useMutation('POST', `${BASE_URL}/auth/signup`);

  // useForm 기본 유효성 검사 통과 시
  const onValid = (validForm: JoinForm) => {
    if (!idExist) {
      setIdMessage('아이디 중복 확인을 해주세요');
      return null;
    }
    if (!isVerified) {
      setErrorMessage('휴대폰 인증을 해주세요');
      return null;
    }
    if (!isNameOk) {
      setErrorMessage('이름은 한글/영문/숫자로 이루어진 2~10 글자로 해주세요.');
    }
    if (!isAgrre) {
      setErrorMessage('개인 정보 동의를 해주세요');
      return null;
    }

    setErrorMessage('');

    console.log({
      username: validForm.username,
      password: validForm.password,
      name: validForm.name,
      phone: validForm.phone,
      address: `${validForm.address} ${validForm.addressDetail}`,
    });

    join({
      username: validForm.username,
      password: validForm.password,
      name: validForm.name,
      phone: `${validForm.phone}`,
      address: `${validForm.address} ${validForm.addressDetail}`,
    });

    console.log(joinData);

    router.replace('/');
  };

  // useForm 기본 유효성 검사 실패 시
  const onUnValid = (error: any) => {
    console.log(error);

    for (let input in error) {
      console.log(input);
      if (error[input].type === 'required') {
        setErrorMessage(`${JoinInputList[input]}를 입력해주세요.`);
        return;
      }
      if (error[input].type === 'validate') {
        setErrorMessage(`${error[input].message}`);
        return;
      }
    }
  };

  // 아이디 중복 확인 Fetch
  const checkUsername = () => {
    if (loading) {
      return;
    }
    idCheck({ username });
  };

  // 아이디 중복 확인 Fetch 이후 상태 값 적용
  useEffect(() => {
    if (username && regExp.id.test(username)) {
      if (data?.ok) {
        setIdMessage('사용 가능한 아이디입니다');
        setIdExist(true);
      } else {
        setIdMessage('이미 존재하는 아이디입니다');
      }
    } else {
      if (data !== undefined) {
        setIdMessage('아이디는 4~20자의 영문, 숫자, 특수문자로 구성되어야합니다');
        setIdExist(false);
      }
    }
  }, [data, username]);

  // 아이디 중복 확인 이후 입력 값 변경 시 재확인 시키기
  useEffect(() => {
    setIdExist(false);
    if (regExp.id.test(username)) {
      setIdMessage('아이디 중복 확인을 해주세요');
    } else {
      setIdMessage('아이디는 4~20자의 영문, 숫자, 특수문자로 구성되어야합니다');
    }
  }, [username]);

  useEffect(() => {
    setIsNameOk(false);
  }, [name]);

  // 인증 번호 요청 Fetch
  const getNumber = () => {
    setIsGetNumber(true);
    console.log('fetching..');
    setRealNumber('0000');
  };

  // 인증 번호 일치 여부 확인
  const checkNumber = () => {
    setIsVerified(true);
    return;
    if (!isGetNumber) {
      setErrorMessage('');
      return;
    } else if (userNumber === realNumber) {
      console.log('success');
      setIsVerified(true);
    } else {
      console.log('fail');
    }
  };

  // 개인 정보 활용 토글
  const toggleAgree = () => {
    setIsAgree((prev) => !prev);
  };

  // 주소 검색 관련
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 주소 검색 모달 토글
  const togglePopup = () => {
    setIsPopupOpen((current) => !current);
  };

  // 주소 검색 완료 시
  const onCompletePost = (data: any) => {
    setValue('address', `[${data?.zonecode}] ${data?.roadAddress}`);
    togglePopup();
  };

  return (
    <JoinWrapper>
      <h2 className="screen_out">Join</h2>
      <Slogan logo />
      <FormLayout>
        <form onSubmit={handleSubmit(onValid, onUnValid)}>
          <InputWithButton>
            <Input
              type="text"
              place="아이디"
              name="username"
              register={register('username', {
                required: true,
                validate: (value) =>
                  regExp.id.test(value) || '4~20자의 영문, 숫자로 이루어저야합니다',
              })}
            />
            <Button type="button" onClick={() => checkUsername()}>
              확인
            </Button>
          </InputWithButton>
          {idMessage ? (
            <Message kind="id" approve={idExist}>
              {idMessage}
            </Message>
          ) : null}
          <Input
            type="password"
            place="비밀번호"
            name="password"
            register={register('password', {
              required: true,
              validate: (value) =>
                regExp.pw.test(value) || '8~20자의 영문, 숫자, 특수문자로 이루어저야합니다',
            })}
          />
          <Input
            type="password"
            place="비밀번호 확인"
            name="passwordCheck"
            register={register('passwordCheck', {
              required: true,
              validate: (value) => value === password || '비밀번호가 일치하지 않습니다',
            })}
          />
          <Input
            type="text"
            place="이름"
            name="name"
            register={register('name', {
              required: true,
              validate: (value) =>
                regExp.name.test(value) || '2~10자의 영문, 숫자로 이루어저야합니다',
            })}
          />
          <Input
            type="text"
            place="휴대폰 번호 ( '-' 제외)"
            name="phone"
            register={register('phone', {
              required: true,
              validate: (value) => regExp.phone.test(value) || '11자의 숫자로 이루어져야합니다',
            })}
          />
          {/* <InputWithButton>
            <Input
              type="text"
              place="휴대폰 번호 ( '-' 제외)"
              name="phone"
              register={register('phone', {
                required: true,
                validate: (value) => regExp.phone.test(value) || '11자의 숫자로 이루어져야합니다',
              })}
            />
            <Button onClick={getNumber} type="button">
              전송
            </Button>
          </InputWithButton> */}
          {/* <InputWithButton>
            <Input
              type="text"
              place="인증번호"
              name="usernumber"
              register={register('usernumber', { required: true })}
            />
            <Button onClick={checkNumber} type="button">
              확인
            </Button>
          </InputWithButton> */}
          <InputWithButton>
            <Input
              type="text"
              place="주소"
              name="address"
              register={register('address', { required: true, disabled: true })}
            />
            <Button onClick={togglePopup} type="button">
              검색
            </Button>
          </InputWithButton>
          {isPopupOpen ? (
            <Modal
              isOpen={isPopupOpen}
              ariaHideApp={false}
              onRequestClose={togglePopup}
              style={modalStyle}>
              <DaumPostcode autoClose onComplete={onCompletePost} />
            </Modal>
          ) : null}
          <Input
            type="text"
            place="상세 주소"
            name="addressDetail"
            register={register('addressDetail', { required: true })}
          />
          {errorMessage ? <Message kind="error">{errorMessage}</Message> : null}
          <AgreeInput htmlFor="agree" active={isAgrre}>
            <div />
            <input type="checkbox" id="agree" onClick={toggleAgree} />
            개인 정보 활용에 동의합니다.
          </AgreeInput>
          <ButtonBig>가입하기</ButtonBig>
        </form>
      </FormLayout>
    </JoinWrapper>
  );
};

export default Join;

const JoinWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`}

  & > div {
    width: 75%;
  }
`;

const Button = styled.button`
  padding: 12px;
  width: 20%;
  border: 1px solid black;
  height: 100%;
  color: white;
  background-color: black;
  cursor: pointer;
`;

interface AgreeInputProps {
  active: boolean;
}

interface MessageProps {
  kind: 'id' | 'error';
  approve?: boolean;
}

const Message = styled.p<MessageProps>`
  margin-bottom: 12px;
  color: ${(props) => (props.approve ? 'green' : 'red')};
  font-size: 14px;
`;

const AgreeInput = styled.label<AgreeInputProps>`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
  max-width: 350px;
  padding: 0 24px;
  margin-bottom: 12px;
  ${media.tablet`max-width:500px`}
  cursor:pointer;

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    border: 1px solid black;
    margin-right: 8px;
    background-color: ${(props) => (props.active ? 'black' : 'white')};
  }

  & > input {
    display: none;
  }
`;
