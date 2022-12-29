import styled from '@emotion/styled';
import media from '@libs/media';
import Image from 'next/image';

const ProductSkeleton = () => {
  return (
    <ProductSkeletonWrapper>
      <div>
        <StatusMark />
        <ImageDiv>
          <Image
            src={
              'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk0GXAAIxDWRAAzNgBzTyq6PQAAAAASUVORK5CYII='
            }
            width={320}
            height={300}
          />
        </ImageDiv>
      </div>
      <TextContents>
        <BrandTokenWrapper>
          <BrandDiv></BrandDiv>
          <TokenDiv></TokenDiv>
        </BrandTokenWrapper>
        <NameDiv></NameDiv>
      </TextContents>
    </ProductSkeletonWrapper>
  );
};

export default ProductSkeleton;

const StatusMark = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  background-color: gray;
  z-index: 5;

  @keyframes loading {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #fefefe, #f2f2f2, #fefefe);
    animation: loading 1s infinite linear;
  }
`;

const ProductSkeletonWrapper = styled.div`
  position: relative;
  flex-basis: 49%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 49%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  cursor: pointer;

  ${media.tablet`flex-basis:30%`}
  ${media.tablet`max-width:32%`}

  ${media.desktop`flex-basis:20%`}
  ${media.desktop`max-width:23.5%`}
`;

const ImageDiv = styled.div`
  width: 100%;
  object-fit: contain;
  padding: 16px;

  & > span > img {
    border-radius: 5px;
  }

  overflow: hidden;
  position: relative;

  @keyframes loading {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: calc(100% - 32px);
    background: linear-gradient(to right, #fefefe, #f2f2f2, #fefefe);
    animation: loading 1s infinite linear;
  }
`;

const TextContents = styled.div`
  padding: 1rem;
  line-height: 1.2rem;
`;

const BrandTokenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BrandDiv = styled.div`
  background-color: #d2d2d2;
  width: 60%;
  padding-top: 20px;
  border-radius: 5px;
  font-family: serif;
  font-weight: 600;

  overflow: hidden;
  position: relative;

  @keyframes loading {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #fefefe, #f2f2f2, #fefefe);
    animation: loading 1s infinite linear;
  }
`;
const TokenDiv = styled.div`
  background-color: #d2d2d2;
  width: 10%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  @keyframes loading {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #fefefe, #f2f2f2, #fefefe);
    animation: loading 1s infinite linear;
  }
`;
const NameDiv = styled.div`
  margin-top: 2px;
  width: 70%;
  background-color: #d2d2d2;
  padding-top: 20px;
  border-radius: 5px;

  overflow: hidden;
  position: relative;

  @keyframes loading {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.8;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #fefefe, #f2f2f2, #fefefe);
    animation: loading 1s infinite linear;
  }
`;
