import styled from '@emotion/styled';
import media from '../../libs/client/media';

const Line = () => {
  return (
    <LineWrapper>
      <hr />
    </LineWrapper>
  );
};

export default Line;

const LineWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  ${media.tablet`max-width:500px`}

  & > hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
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
