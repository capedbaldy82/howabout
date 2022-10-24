import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/input';
import FormLayout from '../components/layouts/formlayout';
import Slogan from '../components/slogan';
import media from '../libs/client/media';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import { modalStyle, regExp } from '../constants';
import ButtonBig from '../components/buttonBig';
import { useEffect } from 'react';

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

const Join: NextPage = ({ result }: any) => {
  const { register, handleSubmit, watch, setValue } = useForm<JoinForm>();

  const [isAgrre, setIsAgree] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [isGetNumber, setIsGetNumber] = useState(false);
  const [realNumber, setRealNumber] = useState('');

  const [idExist, setIdExist] = useState(false);
  const [idMessage, setIdMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const username = watch('username');
  const phone = watch('phone');
  const password = watch('password');
  const userNumber = watch('usernumber');

  useEffect(() => {
    console.log(result);
  }, []);

  // useForm onSubmit
  const onValid = (validForm: JoinForm) => {
    if (!idExist) {
      setErrorMessage('아이디 중복 확인을 해주세요');
      return null;
    }
    if (!isVerified) {
      setErrorMessage('휴대폰 인증을 해주세요');
      return null;
    }
    if (!isAgrre) {
      setErrorMessage('개인 정보 동의를 해주세요');
      return null;
    }

    setErrorMessage('');

    console.log(validForm);
  };

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

  // 아이디 중복 확인
  const checkUsername = (username: string) => {
    if (username && regExp.id.test(username)) {
      if (1) {
        setIdMessage('사용 가능한 아이디입니다');
        setIdExist(true);
      } else {
        setIdMessage('이미 존재하는 아이디입니다');
      }
    } else {
      setIdMessage('아이디는 4~20자의 영문, 숫자, 특수문자로 구성되어야합니다');
      setIdExist(false);
    }
  };

  useEffect(() => {
    setIdExist(false);
  }, [username]);

  // 휴대폰 인증 관련
  const getNumber = () => {
    setIsGetNumber(true);
    console.log('fetching..');
    setRealNumber('0000');
  };

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

  // 개인 정보 활용
  const toggleAgree = () => {
    setIsAgree((prev) => !prev);
  };

  // 주소 검색 관련
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((current) => !current);
  };

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
            <Button type="button" onClick={() => checkUsername(username)}>
              확인
            </Button>
          </InputWithButton>
          <Message kind="id" approve={idExist}>
            {idMessage}
          </Message>
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
          <Message kind="error">{errorMessage}</Message>
          {/* <ButtonBig>가입하기</ButtonBig> */}
          {/* <AgreeInput htmlFor="agree" active={isAgrre}>
            <div />
            <input type="checkbox" id="agree" onClick={toggleAgree} />
            개인 정보 활용에 동의합니다.
          </AgreeInput> */}
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
