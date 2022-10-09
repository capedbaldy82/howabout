import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import media from '../libs/client/media';

interface InputProps {
  place?: string;
  name: string;
  register: UseFormRegisterReturn;
}

const Input = ({ place, name, register }: InputProps) => {
  return (
    <InputWrapper>
      <input type="text" placeholder={place} id={name} {...register} autoComplete="off" />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  & > input {
    margin-bottom: 12px;
    padding: 12px;
    width: 350px;
    ${media.tablet`width:500px`};
    outline: none;

    &:focus {
      border: 2px solid black;
    }
  }
`;
