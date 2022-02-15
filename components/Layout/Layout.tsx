import { memo } from 'react';
import { NextSeo } from 'next-seo';
import styles from './Layout.module.scss';
import { Navbar } from '../Navbar/Navbar';

import { titleTemplate as defaultTitleTemplate } from '../../pages/_app';

type LayoutProps = {
  readonly children: React.ReactNode;
  readonly title?: string;
  readonly headerTitle?: string;
  readonly titleTemplate?: string;
  readonly description?: string;
};

export const Layout = memo<LayoutProps>(
  ({ children, title, titleTemplate = defaultTitleTemplate }) => {
    return (
      <>
        <Navbar />
        <div className={styles.content}>
          {children}
          <NextSeo
            title={title ? titleTemplate.replace('%s', title) : titleTemplate.slice(4)}
            openGraph={{
              title: title ? titleTemplate.replace('%s', title) : titleTemplate.slice(4),
            }}
          />
        </div>
      </>
    );
  },
);

Layout.displayName = 'Layout';
