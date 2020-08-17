import React from 'react';
import styles from '../../styles/app.module.scss';
import AboutList from '../../components/AboutList';

export default () => {
  return (
    <div className={ styles.home__wrap }>

      {/* 簡介 */}
      <section className={ styles.brief }>
        <img src={ require("../../assets/dodo.png") } alt="personal"/>
        <h2>DoDo Bird</h2>
        <ul className={ styles.brief__list }>
          <li>Frontend Developer</li>
          <li>History Buff</li>
          <li>Extinct Creatures</li>
        </ul>
        <p>The dodo is an extinct flightless bird that was endemic to the island of Mauritius.</p>
        <p>Contact ma at dodo@gmail.com</p>
      </section>

      {/* 列表 */}
      <section className={ styles.about }>
        <div className={ styles.about__title }>
          <h3>A section of About me</h3>
          <p>You can find more in the about overview</p>
        </div>
      </section>

      <AboutList />
    </div>
  )
}