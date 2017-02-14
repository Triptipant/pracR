
import React from 'react';
import { Link } from 'react-router';
import Dashboard from './Dashboard';


const Login = React.createClass({
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         id: new Date().getTime()
    //     };
    // },

    handleSubmit(e) {
        e.preventDefault();
       
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const id = new date();
        this.props.login(email,password,id);
    },
    render() {

        return (
            <div>
                 Please Login
                <form ref ="loginform" className="login-form"  onSubmit={this.handleSubmit}> 
                    <input
                        type="text"
                        ref="email"
                        placeholder="EmailAddress"
                    /><br/>
                     <input 
                        type="text"
                        ref="password"
                        placeholder="Password"
                    /><br/>
                    
                   <Link to = {`/Dashboard`}> 
                   <button>Login</button>
                   </Link>
                </form>
               
            </div>
        );
    }
})

export default Login;