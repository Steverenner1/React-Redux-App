import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import SoccerCard from './soccerCard';

const SoccerList = props => {
    return (
        <>
            <h1>Soccer Info</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="Tailspin" color="blue" height="13" width="100" />
                ) : (
                    'See Info'
                )}
            </button>
            {props.stats &&
            props.stats.map(stat => <SoccerCard key={stat.title} soccerlist={stat} />)}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        stats: state.stats
    };
};
export default connect(
    mapStateToProps,
    { getData }
)(SoccerList)