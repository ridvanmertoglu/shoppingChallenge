import React from 'react';
import styles from './Basket.module.scss';
import { BasketProduct } from '../../components';
const Basket = () => {
    return (
     <div className={styles.container}>
        <BasketProduct 
            name="Example Product"
            price="10.99"
            count={1}
        />
        <BasketProduct 
            name="Example Product"
            price="10.99"
            count={1}
        />
        <BasketProduct 
            name="Example Product"
            price="10.99"
            count={1}
        />
        <BasketProduct 
            name="Example Product"
            price="10.99"
            count={1}
        />
          <BasketProduct 
            name="Example Product"
            price="10.99"
            count={1}
        />
     </div>   
     
    );
  }
  
  export default Basket;
  