import React from 'react';
import styles from './styles/app.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.header__wrap}>
          <div className={styles.header__logo}>Pitt Website</div>
          <div className={styles.header__list}></div>
        </div>
      </header>
      <section className={styles.content}>
      </section>
      <footer className={styles.footer}>
        <h4>&copy; 2020 Pitt Wu</h4>
        <p>Handmade with</p>
      </footer>
    </div>
  );
}

export default App;
