import '../styles/main.scss';
import { createWrapper } from 'next-redux-wrapper';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import { theme } from '../assets/theme';

const clientSideEmotionCache = createEmotionCache();

const meta = {
  title: 'TALK WITH YOURSELF',
  description: 'Self-Therapy Journal',
};

export const titleTemplate = `%s | ${meta.title}`;

function MyApp(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      {/* <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          locale: 'en_EN',
          description: meta.description,
        }}
      /> */}
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
