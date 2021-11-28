import {
    SET_BASKET,
    SET_TOTAL_PRICE,
} from '../redux-types';

export const basketDefaultState = {
    products: [],
    totalPrice: 0,
}

export const basketReducer = (state = basketDefaultState, action) => {
    switch (action.type) {
        case SET_BASKET:
            return { ...state, products: [...action.payload] };
        case SET_TOTAL_PRICE:
            return { ...state, totalPrice: action.payload };
        default:
            return state;
    }
}