import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import dashboard from './dashboard';
import cart from './cart';
const rootReducer = combineReducers ({

    login,
    dashboard,
    cart,
    routing: routerReducer
});

export default rootReducer;