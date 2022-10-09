import styled from '@emotion/styled';

const Line = () => {
  return (
    <LineWrapper>
      <hr />
    </LineWrapper>
  );
};

export default Line;

const LineWrapper = styled.div`
  & > hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
    overflow: visible;

    &:after {
      content: 'or';
      position: relative;
      top: -10px;
      padding: 0 7.5px;
      background-color: white;
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;
