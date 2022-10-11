import styled from '@emotion/styled';
import React from 'react';
import media from '../libs/client/media';

interface ButtonProps {
  children: string | React.ReactNode;
  isActive?: boolean;
  [key: string]: any;
}

const ButtonBig = ({ children, active = true }: ButtonProps) => {
  return <ButtonWrapper active={active}>{children}</ButtonWrapper>;
};

export default ButtonBig;

const ButtonWrapper = styled.button<{ active: boolean }>`
  margin-bottom: 12px;
  padding: 12px;
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`};
  border: 1px solid black;
  background-color: ${(props) => (props.active ? 'black' : 'gray')};
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
