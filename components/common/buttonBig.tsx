import styled from '@emotion/styled';
import React from 'react';
import media from '../../libs/media';

interface ButtonProps {
  children: string | React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const ButtonBig = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default ButtonBig;

const ButtonWrapper = styled.button`
  margin-bottom: 12px;
  padding: 12px;
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};
  color: white;
  border: 1px solid black;
  background-color: black;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    border: 1px solid gray;
  }
`;
