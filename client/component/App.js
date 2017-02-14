import React from 'react';
import Main from './Main';
import * as Actions from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return {
    login : state.login,
    dashboard: state.dashboard,
    cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(Actions, dispatch);
} 

const App = connect(mapStateToProps,
mapDispatchToProps)(Main);

export default App;