import React from 'react';
import styles from './DefaultLayout.module.scss';
import { Header } from '../../components'


const DefaultLayout = ({children}) => {
    return (
     <div className={styles.mainContainer}>
        <Header />
        <div className={styles.contentContainer}>
            {children}
        </div>
     </div>
     
    );
  }

  export default DefaultLayout;
  