import styled from '@emotion/styled';
import React from 'react';
import media from '../libs/client/media';

interface ButtonProps {
  children: string | React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  margin-bottom: 12px;
  padding: 12px;
  width: 100%;
  ${media.tablet`width:500px`};
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
