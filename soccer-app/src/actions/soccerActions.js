import axios from 'axios';

export const FETCH_SOCCER_START = 'FETCH_SOCCER_START';
export const FETCH_SOCCER_SUCCESS = 'FETCH_SOCCER_SUCCESS';
export const FETCH_SOCCER_FAILURE = 'FETCH_SOCCER_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch ({ type: FETCH_SOCCER_START });
        axios
            .get('https://dog.ceo/api/breed/bulldog/french/images')
            .then(res => {
                console.log(res.data.message);
                dispatch({ type: FETCH_SOCCER_SUCCESS, payload: res.data.message});
            })
            .catch(err => {
                dispatch({ type: FETCH_SOCCER_FAILURE, payload: err.response});
            });
    };
};