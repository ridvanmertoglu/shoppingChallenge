import React from 'react';
import styles from './Header.module.scss';
import { LOGO,BASKET } from '../../assets'
import {Row,Col} from 'react-bootstrap'


const Header = () => {
    return (
     <div className={styles.container}>
      <Row className={styles.row}>
      <Col xs={6} md={{ span: 2, offset: 5 }} className={styles.col1}>
        <img 
            src={LOGO}
            alt="logo"
            className={styles.logo}
            />
      </Col>   
    
      <Col xs={6} md={5} className={styles.basketCol}>
        <div className={styles.basketContainer}>
        <img 
            src={BASKET}
            alt="basket"
            className={styles.basket}
            />
            <p className={styles.basketPriceText}>₺ 499.98</p>
        </div>
      </Col>
      </Row>
      </div>   
     
    );
  }
  
  export default Header;
  