import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.content}>
      <header className={styles.cos}>
        <h1 className={styles.title}>TALK WITH YOURSELF</h1>
        <p>Self-Therapy Journal</p>
      </header>
      <div className={styles.bar} />
    </div>
  );
};
