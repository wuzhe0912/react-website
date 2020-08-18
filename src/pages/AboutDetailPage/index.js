import React from 'react';
import styles from './detail.module.scss';

export default () => {
  return(
    <div className={ styles.wrap }>
      <div className={ styles.container }>
        <div className={ styles.title }>
          <h2>title</h2>
        </div>
        <section className={ styles.content }>
          test text
        </section>
      </div>
    </div>
  )
}