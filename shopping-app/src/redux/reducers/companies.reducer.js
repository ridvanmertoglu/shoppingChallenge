import {
    SET_COMPANIES
} from '../redux-types';

export const companiesDefaultState = {
companies: []
}

export const companiesReducer = (state = companiesDefaultState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
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