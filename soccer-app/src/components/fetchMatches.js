// import axios from "axios";
// // import { FETCH_MATCHES_ERROR } from "../actions/action";
// // import { fetchMatchesPending, fetchMatchesSuccess, fetchMatchesError } from '../actions/action';

// // function fetchMatches() {
// export const FETCH_MATCHES_START = "FETCH_MATCHES_START";
// export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
// export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";

// const fetchMatches = () => {
//     return dispatch => {
//         dispatch({ type: FETCH_MATCHES_START });
//         axios
//         .get ('https://www.scorebat.com/video-api/v1/')    
//         .then(res => {
//             dispatch({ type: FETCH_MATCHES_SUCCESS, payload: res.matches });
//             console.log(res);
//         })
//         .catch(err => {
//             dispatch({ type: FETCH_MATCHES_FAILURE, payload: err.response })
//         });
//     };
// };

// export default fetchMatches;