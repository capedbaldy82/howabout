import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head lang="ko">
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: 'Noto Sans KR' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
