import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

const meta = {
  title: 'TALK WITH YOURSELF',
  description: 'Self-Therapy Journal',
};

export const titleTemplate = `%s | ${meta.title}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          locale: 'en_EN',
          description: meta.description,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
