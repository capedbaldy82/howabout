import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>CapedBaldy Inc. | HowAbout</li>
        <li>인천광역시 부평구 창휘로 17 | capedbaldman82@gmail.com</li>
        <li>Copryright © 2022 CapedBaldy Inc.</li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 32px;
  height: 200px;
  color: white;
  background-color: black;

  & > ul {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    & > li {
      margin-bottom: 16px;
    }
  }
`;
