import React from 'react';
import styles from './BasketProduct.module.scss';
import { PLUS, MINUS } from '../../assets';
import {Col} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { basketActions } from '../../redux/actions';
import {  useDispatch } from 'react-redux';


const BasketProduct = ({name, price,count}) => {

    const dispatch = useDispatch();

    const basketContent = useSelector((state) => state.basketReducer.products);
    const basketTotalPrice = useSelector((state) => state.basketReducer.totalPrice);


    const handleOnclickDecrease = () => {
        const newBasketContent = basketContent;
        let newBasketTotalPrice = basketTotalPrice;
        const choosenProduct = basketContent.find((product) => product.name === name);
        if (choosenProduct.count > 1) {
            newBasketContent[basketContent.indexOf(choosenProduct)] = {
                ...choosenProduct,
                count: choosenProduct.count - 1
            }
            newBasketTotalPrice -= choosenProduct.price;

        } else {
            newBasketContent.splice(basketContent.indexOf(choosenProduct),1);
            newBasketTotalPrice -= choosenProduct.price;
        }
        dispatch(basketActions.setBasket(newBasketContent));
        dispatch(basketActions.setTotalPrice(newBasketTotalPrice));
    }

    const handleOnclickIncrease = () => {
        const newBasketContent = basketContent;
        let newBasketTotalPrice = basketTotalPrice;
        const choosenProduct = basketContent.find((product) => product.name === name);
        newBasketContent[basketContent.indexOf(choosenProduct)] = {
            ...choosenProduct,
            count: choosenProduct.count + 1
        }
        newBasketTotalPrice += choosenProduct.price;
        dispatch(basketActions.setBasket(newBasketContent));
        dispatch(basketActions.setTotalPrice(newBasketTotalPrice));
    }


    return (
        <div className={styles.productInBasket}>
            <Col md={7}>
                <p className={styles.productName}>{name}</p>
                <p className={styles.productPrice}>₺ {price}</p>
            </Col>
            <Col md={5} className={styles.productNumberContainer}>
                <button className={styles.counterButton} onClick={handleOnclickDecrease}>
                <img 
                    src={MINUS}
                     alt="plus"
                    className={styles.decrease}
                 />
                </button>
                <div className={styles.countContainer}>
                <p className={styles.count}>{count}</p>
                </div>
                <button className={styles.counterButton} onClick={handleOnclickIncrease}>
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
  