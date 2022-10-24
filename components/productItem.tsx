import styled from '@emotion/styled';
import media from '../libs/client/media';

interface ItemProps {
  id: number;
  brand: string;
  status: boolean;
  name: string;
  image: string;
  rank: number;
}

const ProductItem = ({ image, brand, rank, status, name }: ItemProps) => {
  return (
    <ItemWrapper>
      <div>
        <img src={image} alt="상품 사진" />
      </div>
      <TextContents>
        <p>{brand}</p>
        <p>{name}</p>
        <div>
          <p>{rank}</p>
          <p> [{status ? '가능' : '불가'}]</p>
        </div>
      </TextContents>
    </ItemWrapper>
  );
};

export default ProductItem;

const ItemWrapper = styled.div`
  flex-basis: 49%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 49%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition: 0.3s all ease-out;
  }

  ${media.tablet`flex-basis:30%`}
  ${media.tablet`max-width:32%`}

  ${media.desktop`flex-basis:20%`}
  ${media.desktop`max-width:23.5%`}

  & > div > img {
    height: 250px;
    ${media.tablet`height:300px`}
    width: 100%;
    object-fit: contain;
  }
`;

const TextContents = styled.div`
  padding: 1rem;
  line-height: 1.2rem;

  & > p:first-of-type {
    font-family: serif;
    font-weight: 600;
  }

  & > p:nth-of-type(2) {
    font-size: 14px;
  }

  & > div {
    display: flex;
  }
`;
