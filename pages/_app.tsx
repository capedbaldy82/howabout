import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layouts/layout';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HowAbout</title>
      </Head>
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
