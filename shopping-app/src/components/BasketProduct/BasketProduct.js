import React from 'react';
import styles from './BasketProduct.module.scss';
import { PLUS, MINUS } from '../../assets';
import {Col} from 'react-bootstrap'


const BasketProduct = ({name, price,count}) => {

    return (
        <div className={styles.productInBasket}>
            <Col md={7}>
                <p className={styles.productName}>{name}</p>
                <p className={styles.productPrice}>₺ {price}</p>
            </Col>
            <Col md={5} className={styles.productNumberContainer}>
                <button className={styles.counterButton}>
                <img 
                    src={MINUS}
                     alt="plus"
                    className={styles.decrease}
                 />
                </button>
                <div className={styles.countContainer}>
                <p className={styles.count}>{count}</p>
                </div>
                <button className={styles.counterButton}>
                <img 
                    src={PLUS}
                     alt="plus"
                    className={styles.increase}
                 />
                </button>
            </Col>
        </div>
    );
  }
  
  export default BasketProduct;
  