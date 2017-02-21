import React from 'react';

export default class NewUser extends React.Component {
  constructor(props) {
     super(props);
      this.handleChangee = this.handleChangee.bind(this);
      this.handleChangep = this.handleChangep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
     name:'',
      email: '',
      password:'',
      address:'',
      error:''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let errorMessage;
    if (this.state.email.length === 0) {
      errorMessage = 'You must enter email.';
     this.state.error=errorMessage;
    }
   
    else {
     this.props.addnewuser(this.state.name,this.state.email,this.state.password,this.state.address,)
     this.context.router.push('/Dashboard/')
    }
  
    
}
    

  

  handleChangen(evt) {
    this.setState({
      name: evt.target.value,
    });
    
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
    handleChangea(evt) {
    this.setState({
      address: evt.target.value,
    });
    }

  render() 
  

  {
    return (
      <form  onSubmit={this.handleSubmit} ref="Form">
        <div >
           <div>  Login </div>
          <input
            type="text"
            value={this.state.name}
            onChange={(evt)=>this.handleChangen(evt)}
            placeholder="Name"
          /><br/>

            <input
            type="text"
            value={this.state.email}
            onChange={(evt)=>this.handleChangee(evt)}
            placeholder="Email"
        
          />
         <div> {this.state.error}</div>
           <input
            type="text"
            value={this.state.password}
            onChange={(evt)=>this.handleChangep(evt)}
            placeholder="Password"
          /><br/>
           <input
            type="text"
            value={this.state.address}
            onChange={(evt)=>this.handleChangea(evt)}
            placeholder="Address"
          />
        </div><br/>
        <div >
          <input
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    );
  }

  
}
 NewUser.contextTypes = {
    router: React.PropTypes.object
  }

