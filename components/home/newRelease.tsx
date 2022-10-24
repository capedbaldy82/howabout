import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useSWR from 'swr';
import Product from '../../pages/product';

const NewRelease = () => {
  const { data, error } = useSWR<Product[]>(`https://howabout.site/product/`);

  return (
    <NewReleaseWrapper>
      <Carousel>
        {data &&
          data?.slice(0, 8).map((product) => (
            <Plane key={product.id}>
              <img src={product.image} alt="새 상품" />
            </Plane>
          ))}
      </Carousel>
    </NewReleaseWrapper>
  );
};

export default NewRelease;

const NewReleaseWrapper = styled.div`
  width: 100%;
  height: 500px;
  color: white;
  position: relative;
  perspective: 2000px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const Carousel = styled.section`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -150px;
  transform-style: preserve-3d;
  animation: spin 30s linear infinite;

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  & > article:nth-of-type(1) {
    transform: rotateY(0deg) translateZ(-465px);
  }
  & > article:nth-of-type(2) {
    transform: rotateY(45deg) translateZ(-465px);
  }
  & > article:nth-of-type(3) {
    transform: rotateY(90deg) translateZ(-465px);
  }
  & > article:nth-of-type(4) {
    transform: rotateY(130deg) translateZ(-465px);
  }
  & > article:nth-of-type(5) {
    transform: rotateY(180deg) translateZ(-465px);
  }
  & > article:nth-of-type(6) {
    transform: rotateY(225deg) translateZ(-465px);
  }
  & > article:nth-of-type(7) {
    transform: rotateY(270deg) translateZ(-465px);
  }
  & > article:nth-of-type(8) {
    transform: rotateY(315deg) translateZ(-465px);
  }
`;

const Plane = styled.article`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 400px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  backface-visibility: hidden;
  transition: all 0.5s;
  padding: 20px;
  opacity: 1;
`;
