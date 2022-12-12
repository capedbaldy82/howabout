import styled from '@emotion/styled';
import Image from 'next/image';
import media from '../../libs/media';

interface IntroPostProps {
  src: string;
  alt: string;
  content: string;
  width?: number;
  height?: number;
}

const IntroPost = ({ src, alt, content, width, height }: IntroPostProps) => {
  return (
    <IntroPostWrapper>
      <Image src={src} alt={alt} width={width || 550} height={height || 350} layout="intrinsic" />
      <p>{content}</p>
      <br />
    </IntroPostWrapper>
  );
};

export default IntroPost;

const IntroPostWrapper = styled.div`
  margin-bottom: 60px;
  ${media.tablet`margin-bottom:120px`};

  & > p {
    margin: 0 auto;
    padding: 1rem;
    font-family: 'EF_Diary';
    word-break: keep-all;

    width: 100%;
    ${media.tablet`width:60%`};
    ${media.tablet`min-width:550px`};

    line-height: 22px;
    ${media.tablet`line-height:28px`};

    font-size: 16px;
    ${media.tablet`font-size:20px`};
  }
`;
