import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import media from '../../libs/media';

interface InputProps {
  type?: string;
  place?: string;
  name: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type = 'text', place, name, register }: InputProps) => {
  return (
    <InputWrapper>
      <input type={type} placeholder={place} id={name} {...register} autoComplete="off" />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};
  & > input {
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
    outline: none;

    &:focus {
      border: 2px solid black;
    }
  }
`;
