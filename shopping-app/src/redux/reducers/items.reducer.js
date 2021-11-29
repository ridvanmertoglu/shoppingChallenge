import {
    SET_ITEMS,
    SET_TAGS,
} from '../redux-types';

export const itemsDefaultState = {
    items: [],
    tags: [],
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
        case SET_TAGS:
            return {
                ...state,
                tags: {
                    ...action.payload,
                }
            };
        default:
            return state;
    }
}