import styled from '@emotion/styled';
import React from 'react';

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FormLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px 24px 0 24px;
  }
`;
