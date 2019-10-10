import {FETCH_MATCHES_PENDING, FETCH_MATCHES_SUCCESS, FETCH_MATCHES_ERROR} from '../actions/action';

const initialState = {
    pending: false,
    matches: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case FETCH_MATCHES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_MATCHES_SUCCESS:
            return {
                ...state,
                pending: false,
                matches: action.payload
            }
        case FETCH_MATCHES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getMatches = state => state.matches;
export const getMatchesPending = state => state.pending;
export const getMatchesError = state => state.error;

