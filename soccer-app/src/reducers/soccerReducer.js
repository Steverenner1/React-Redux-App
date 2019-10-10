import {
    FETCH_SOCCER_START,
    FETCH_SOCCER_SUCCESS,
} from '../actions';

const initialState = {
    stats: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SOCCER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SOCCER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                stats: action.payload,
                error: ''
            };
        default:
            return state;
    }
};