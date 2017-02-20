/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
   <App />
 </Provider>,
 document.getElementById('root')
);*/

import React from 'react';
import { render } from 'react-dom';

import App from './component/App';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
// import NewUser from './component/NewUser';
import Logout from './component/Logout';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store, { history } from './store';  
import { Router, Route, IndexRoute,browserHistory} from 'react-router'; 
   
const router = (

    <Provider store={store}>
        <Router history = {browserHistory}>  
            <Route exact={true} path ="/" component={App}>
                <IndexRoute component={Login}></IndexRoute>
                 <Route exact={true} path="/Login" component={Login}/>
                <Route exact={true} path="/Dashboard" component={Dashboard}/>
                  <Route exact={true} path="/Cart" component={Cart}/>
                <Route path="/Logout" component={Logout}/>
                <Route path="/Cart" component={Cart}/>
                {/*<Route path="/NewUser" component={NewUser}></Route>*/}
            </Route> 
        </Router>       
    </Provider>
)

//export default router;

render (
    router,
    document.getElementById('root')
);
