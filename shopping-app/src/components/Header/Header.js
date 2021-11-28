import React from 'react';
import styles from './Header.module.scss';
import { LOGO,BASKET } from '../../assets'
import {Row,Col} from 'react-bootstrap'
import { useSelector } from 'react-redux';


const Header = () => {

  const basketTotalPrice = useSelector((state) => state.basketReducer.totalPrice)

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
            <p className={styles.basketPriceText}>₺ {basketTotalPrice.toFixed(2)}</p>
        </div>
      </Col>
      </Row>
      </div>   
     
    );
  }
  
  export default Header;
  