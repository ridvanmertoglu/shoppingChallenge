import {
    SET_BASKET,
    SET_TOTAL_PRICE,
} from '../redux-types';

export const setBasket = (products) => {
    return {
      type: SET_BASKET,
      payload: products,
    };
  };

  export const setTotalPrice = (totalPrice) => {
    return {
      type: SET_TOTAL_PRICE,
      payload: totalPrice,
    };
  };