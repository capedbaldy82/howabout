import styled from '@emotion/styled';
import Link from 'next/link';
import media from '../../libs/media';

interface ItemProps {
  id: number;
  brand: string;
  status: boolean;
  name: string;
  image: string;
  rank: number;
}

const ProductItem = ({ id, image, brand, rank, status, name }: ItemProps) => {
  return (
    <Link href={`/product/${id}`}>
      <ItemWrapper>
        <div>
          <StatusMark status={status} />
          <img
            src={`https://imagedelivery.net/nJK6oMiGlswmnGc8M5OUDA/${image}/product`}
            alt="상품 사진"
          />
        </div>
        <TextContents>
          <div>
            <p>{brand}</p>
            <p>{rank}</p>
          </div>
          <p>{name}</p>
        </TextContents>
      </ItemWrapper>
    </Link>
  );
};

export default ProductItem;

const StatusMark = styled.div<{ status: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  background-color: ${({ status }) => (status ? '#1DDB16' : '#FF0000')};
`;

const ItemWrapper = styled.div`
  position: relative;
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

  & > div {
    display: flex;
    justify-content: space-between;

    & > p:first-of-type {
      font-family: serif;
      font-weight: 600;
    }

    & > p:last-of-type {
    }
  }

  & > p:last-of-type {
    font-size: 13px;
  }

  & > div {
    display: flex;
  }
`;
