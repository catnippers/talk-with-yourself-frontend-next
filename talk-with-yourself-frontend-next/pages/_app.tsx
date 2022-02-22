import '../styles/main.scss';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { store } from '../store';

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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
