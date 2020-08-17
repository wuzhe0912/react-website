import React from 'react';
import styles from './list.module.scss';
import { Link } from 'react-router-dom';

export default ({ dataSource }) => {
  return(
    <div className={ styles.wrap }>
      <ul className={ styles.container }>
        {
          dataSource && dataSource.map(node => 
            <li key={node.id}>
              <Link to={ `/about/${node.id}` } className={ styles.list }>
                <div className={ styles.cover }>
                  <img src={ node.cover } alt={ node.title } />
                </div>
                <div className={ styles.brief__wrap }>
                  <h3>{ node.title }</h3>
                  <p>{ node.brief }</p>
                  <div className={ styles.tag }>
                    {
                      node.tags && node.tags.map(item => 
                        <span className={ styles.list__skill } key={item}>{item}</span>
                      )
                    }
                  </div>
                </div>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
