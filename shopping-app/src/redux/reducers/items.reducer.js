import {
    SET_ITEMS
} from '../redux-types';

export const itemsDefaultState = {
    items: []
}

export const itemsReducer = (state = itemsDefaultState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: {
                  ...action.payload,
                }
            };
        default:
            return state;
    }
}