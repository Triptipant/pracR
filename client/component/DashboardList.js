import React from 'react';

export default class DashboardList extends React.Component {
  constructor(props) {
     super(props);
      this.handleChangee = this.handleChangee.bind(this);
      this.handleChangep = this.handleChangep.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
      email: '',
      password:''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.email,this.state.password)
     this.setState({email:''})
     this.setState({password:''})
    
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
      <form  onSubmit={this.handleSubmit} ref="Form">
        <div >
      
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(evt)=>this.handleChangee(evt)}
            placeholder="email"
          /><br/>
            <input
            type="text"
            className="form-control"
            value={this.state.password}
            onChange={(evt)=>this.handleChangep(evt)}
            placeholder="passord"
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
