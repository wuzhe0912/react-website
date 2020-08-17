import React, { Component } from 'react';
import styles from './styles/app.module.scss'
import { Link, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import WorkDetailPage from './WorkDetailPage';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Link to="/" className={styles.header__logo}>Pitt Lab</Link>
          <ul className={styles.header__list}>
            <Link to="/" className={ location.pathname === '/' ? styles.selected : null }>HOME</Link>
            <Link to="/works" className={ location.pathname === '/works' ? styles.selected : null }>WORK</Link>
          </ul>
        </header>
        <section className={styles.content}>
          <Route path="/" exact component={ HomePage }></Route>
          <Route path="/works" exact component={ WorkPage }></Route>
          <Route path="/works/:id" exact component={ WorkDetailPage }></Route>
        </section>
        <footer className={styles.footer}>
          <h4>&copy; 2020 Pitt Wu</h4>
          <p>Handmade with</p>
        </footer>
      </div>
    )
  }
}

export default withRouter(App);
