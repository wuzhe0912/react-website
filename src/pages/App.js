import React, { Component } from 'react';
import styles from '../styles/app.module.scss'
import { Link, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AboutDetailPage from './AboutDetailPage';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

        {/* header */}
        <header className={styles.header}>
          <Link to="/" className={styles.header__logo}>DoDo Lab</Link>
          <ul className={styles.header__list}>
            <Link to="/" className={ location.pathname === '/' ? styles.selected : null }>HOME</Link>
            <Link to="/about" className={ location.pathname === '/about' ? styles.selected : null }>ABOUT</Link>
          </ul>
        </header>

        {/* content */}
        <section className={styles.content}>
          <Route path="/" exact component={ HomePage }></Route>
          <Route path="/about" exact component={ AboutPage }></Route>
          <Route path="/about/:id" exact component={ AboutDetailPage }></Route>
        </section>

        {/* footer */}
        <footer className={styles.footer}>
          <h4>&copy; 2020 Pitt Wu's DoDo</h4>
          <p>Handmade with</p>
        </footer>
      </div>
    )
  }
}

export default withRouter(App);
