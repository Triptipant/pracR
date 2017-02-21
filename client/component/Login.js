import React from 'react';
import { Link } from 'react-router';

export default class NewUser extends React.Component {
  constructor(props) {
     super(props);
      this.handleChangee = this.handleChangee.bind(this);
      this.handleChangep = this.handleChangep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
   
      email: '',
      password:'',
     
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let errorMessage;
    if (this.state.email.length === 0) {
      errorMessage = 'You must enter email.';
      console.log(errorMessage);
    }
   
    else {
     this.props.addnewuser(this.state.name,this.state.email,this.state.password,this.state.address,)
     this.context.router.push('/Dashboard/')
    }
  
    
}

   handleChangee(evt) {
    this.setState({
      email: evt.target.value,
    });
   }
    handleChangep(evt) {
    this.setState({
      password: evt.target.value,
    });
    }
  

  render() 
  

  {
    return (
        <div>
      <form  onSubmit={this.handleSubmit} ref="Form">
        <div >
           <div> Welcome to  Login page </div>
         <input
            type="text"
            value={this.state.email}
            onChange={(evt)=>this.handleChangee(evt)}
            placeholder="Email"
          /><br/>
           <input
            type="text"
            value={this.state.password}
            onChange={(evt)=>this.handleChangep(evt)}
            placeholder="Password"
          /><br/>
          
        </div><br/>
        <div >
         <button>Login</button>
        </div>
      </form>
       
                <Link to = {`/NewUser`}> 
                 <button >  NewUser </button>
                   </Link>
        
      </div>
      
    );
     
  }

  
}
 NewUser.contextTypes = {
    router: React.PropTypes.object
  }

