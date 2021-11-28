import React from 'react';
import styles from './Basket.module.scss';
import { BasketProduct } from '../../components';
import { useSelector } from 'react-redux';
import {Col} from 'react-bootstrap'

const Basket = () => {

    const basketContent = useSelector((state) => state.basketReducer.products);
    const basketTotalPrice = useSelector((state) => state.basketReducer.totalPrice);

    return (
     <div className={styles.container}>
     <div className={styles.productPart}>
        {
            basketContent.map((product) => (
                <BasketProduct 
                    name={product.name}
                    price={product.price}
                    count={product.count}
                />
            ))
        }
     </div>
        <Col md={{span:3, offset:7}}>
            <div className={styles.totalPriceContainer}>
                <p className={styles.totalPrice}>₺ {basketTotalPrice.toFixed(2)}</p>
            </div>
        </Col>
     </div>   
     
    );
  }
  
  export default Basket;
  