import { memo } from 'react';
import { NextSeo } from 'next-seo';
import styles from './Layout.module.scss';

import { titleTemplate as defaultTitleTemplate } from '../../pages/_app';

type LayoutProps = {
  readonly children: React.ReactNode;
  readonly title?: string;
  readonly headerTitle?: string;
  readonly titleTemplate?: string;
  readonly description?: string;
};

export const Layout = memo<LayoutProps>(
  ({ title, headerTitle, titleTemplate = defaultTitleTemplate, description }) => {
    return (
      <div className={styles.content}>
        <header className={styles.title}>
          <h1 className={styles.title}>{headerTitle}</h1>
          <p>{description}</p>
        </header>
        <div className={styles.bar} />
        <NextSeo
          title={title ? titleTemplate.replace('%s', title) : titleTemplate.slice(4)}
          openGraph={{
            title: title ? titleTemplate.replace('%s', title) : titleTemplate.slice(4),
          }}
        />
      </div>
    );
  },
);

Layout.displayName = 'Layout';
