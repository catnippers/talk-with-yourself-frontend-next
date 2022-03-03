import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.content}>
      <div className={styles.bar} />
      <div className={styles.footer_container}>
        <div>
          <h1>TALK WITH YOURSELF</h1>
          <p>Self-therapy Journal</p>
        </div>
        <div>
          <h2>Display Language</h2>
        </div>
        <div className={styles.select}>
          <select>
            <option value="englis">Englis (US)</option>
            <option value="polish">Polish (PL)</option>
          </select>
        </div>
        <ul className={styles.list}>
          <li className={styles.first}>Support</li>
          <li>Privacy</li>
          <li>Policy</li>
          <li>Cookies</li>
        </ul>
        <p>© 2021 Catnippers Social Club</p>
      </div>
    </footer>
  );
};
