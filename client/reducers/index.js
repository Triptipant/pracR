import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginadd from './login';
import dashboard from './dashboard';
import cart from './cart';
const rootReducer = combineReducers ({

    loginadd,
    dashboard,
    cart,
    routing: routerReducer
});

export default rootReducer;