// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import fetchMatches from './fetchMatches';
// import { getMatchesError, getMatches, getMatchesPending } from '../reducers/reducer';

// class MatchesView extends Component {
//     constructor(props) {
//         super(props);

//         this.shouldComponentRender = this.shouldComponentRender.bind(this);
//     }

//     componentWillMount() {
//         const {fetchMatches} = this.props;
//         fetchMatches();
//     }

//     shouldComponentRender() {
//         const {pending} = this.props;
//         if(this.pending === false) return false;
//         return true;
//     }

//     render() {
//         const {matches, error, pending} = this.props;

//         return (
//             <div className='matches-list-wrapper'>
//                 {error && <span className='product-list-error'>{error}</span>}
//                 <fetchMatches matches={matches} />
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     error: getMatchesError(state),
//     matches: fetchMatches(state),
//     pending: getMatchesPending(state)
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchMatches: fetchMatches
// }, dispatch)

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MatchesView);