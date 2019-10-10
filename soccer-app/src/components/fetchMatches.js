import { fetchMatchesPending, fetchMatchesSuccess, fetchMatchesError } from '../actions/action';

function fetchMatches() {
    return dispatch => {
        dispatch(fetchMatchesPending());
        fetch('https://api.football-data.org/v2/competitions/CL/matches')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMatchesSuccess(res.matches));
            return res.matches;
        })
        .catch(error => {
            dispatch(fetchMatchesError(error));
        })
    }
}

export default fetchMatches;