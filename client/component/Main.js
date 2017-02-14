import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Login from './Login';


const Main = React.createClass ({
    render() {
        return  (
            <div>
                <h1>
                    
                </h1>
              {React.cloneElement({...this.props}.children, {...this.props})}
            </div>
        )
    }

});

export default Main;

