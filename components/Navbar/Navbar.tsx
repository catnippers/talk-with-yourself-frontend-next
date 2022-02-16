import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>TALK WITH YOURSELF</h1>
        <p>Self-therapy Journal</p>
      </nav>
      <div className={styles.bar} />
    </>
  );
};
