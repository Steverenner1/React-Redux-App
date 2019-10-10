// import {FETCH_MATCHES_START, FETCH_MATCHES_SUCCESS, FETCH_MATCHES_FAILURE} from '../actions';

// const initialState = {
//     pending: false,
//     matches: [],
//     error: null
// }

// export const reducer = (state = initialState, action) => {
//     console.log(action)
//     switch(action.type) {
//         case FETCH_MATCHES_START:
//             return {
//                 ...state,
//                 pending: true
//             }
//         case FETCH_MATCHES_SUCCESS:
//             return {
//                 ...state,
//                 pending: false,
//                 matches: action.payload
//             }
//         case FETCH_MATCHES_FAILURE:
//             return {
//                 ...state,
//                 pending: false,
//                 error: action.error
//             }
//         default:
//             return state;
//     }
// }

// export const getSoccerMatches = state => state.matches;
// export const getMatchesSuccess = state => state.success;
// export const getMatchesFailure = state => state.failure;

