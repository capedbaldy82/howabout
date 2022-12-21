import styled from '@emotion/styled';
import media from '../../libs/media';

interface SloganProps {
  slogan?: boolean;
  logo?: boolean;
}

const Slogan = ({ slogan, logo }: SloganProps) => {
  return (
    <SloganWrapper>
      {slogan ? <p>당신의 새로운 스타일을 위해</p> : null}
      {logo ? <p>HowAbout</p> : null}
    </SloganWrapper>
  );
};

export default Slogan;

const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
  ${media.tablet`padding-top:100px`}
  ${media.tablet`padding-bottom:124px`}
  width: 100%;
  background-color: black;
  color: white;

  & > p:first-of-type {
    font-size: 24px;
    margin-bottom: 12px;
    white-space: nowrap;
  }

  & > p:last-of-type {
    font-size: 48px;
  }
`;
