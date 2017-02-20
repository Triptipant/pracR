
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
      
        this.props.login(email,password);
        this.context.router.push('/Cart/')
     
      
      
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

                   <button >
                         {/*<Link to = {`/Dashboard`}> */}
                  Login
                   {/*</Link>*/}
                   </button>
                </form>
                
            </div>
        );
    }
})

 Login.contextTypes = {
    router: React.PropTypes.object
  }
export default Login;