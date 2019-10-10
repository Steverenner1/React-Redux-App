// import React from 'react';
// import { connect } from "react-redux";
// import { getMatches } from "../actions";
// import { Button } from "semantic-ui-react";
// import Today from "./today";

// const Matches = props => {
//     return (
//         <div>
//             <h1>Today's Matches</h1>
//             <Button onClick={() => props.getMatches()}>
//                 {props.isLoading ? "error" : "Get Soccer Matches"}
//             </Button>
//             {props.data &&
//                 props.data.map(item => <Today key={item.name} data={item} />)}
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         isLoading: state.isLoading,
//         data: state.data
//     };
// };

// export default connect(
//     mapStateToProps,
//     { getMatches }
// )(Matches);