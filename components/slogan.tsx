import styled from '@emotion/styled';

const Slogan = () => {
  return (
    <SloganWrapper>
      <p>당신의 새로운 도전을 위해</p>
      <p>HowAbout</p>
    </SloganWrapper>
  );
};

export default Slogan;

const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 64px;
  width: 100%;
  background-color: black;
  color: white;

  & > p:first-of-type {
    font-size: 24px;
    margin-bottom: 12px;
  }

  & > p:last-of-type {
    font-size: 48px;
  }
`;
