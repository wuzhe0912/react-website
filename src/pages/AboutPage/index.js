import React from 'react';
import styles from './about.module.scss';
import AboutList from '../../components/AboutList';
import MockData from '../works.json';

export default () => {
  return(
    <section className={ styles.wrap }>
      <div className={ styles.title }>
        <h3>About me</h3>
        <p>A collection of different things I have worked on.</p>
      </div>
      <AboutList dataSource = { MockData.data } />
    </section>
  )
}
