import { css } from '@emotion/react';

interface SizesType {
  [ket: string]: string;
}

export const sizes: SizesType = {
  mobile: '480',
  tablet: '768',
  desktop: '1024',
};

const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media screen and (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

const customMedia = (size: number) => {
  const custom = (...args: any) => css`
    @media screen and (min-width: ${size}px) {
      ${css(...args)};
    }
  `;

  return custom;
};

export { customMedia };

export default media;
