import { css } from '@emotion/react';

interface SizesType {
  [ket: string]: string;
}

const sizes: SizesType = {
  tablet: '768px',
  desktop: '1024px',
};

const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media screen and (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
