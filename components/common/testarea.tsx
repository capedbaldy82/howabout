import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import media from '../../libs/media';

interface InputProps {
  place?: string;
  name: string;
  register: UseFormRegisterReturn;
}

const Textarea = ({ place, name, register }: InputProps) => {
  return (
    <InputWrapper>
      <textarea placeholder={place} id={name} {...register} autoComplete="off" />
    </InputWrapper>
  );
};

export default Textarea;

const StyledTextArea = styled.input`
  display: flex;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};

  & > textarea {
    resize: none;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
    outline: none;
    height: 100px;
    word-break: wrap;

    ${media.tablet`height:200px`};

    &:focus {
      border: 2px solid black;
    }
  }
`;
