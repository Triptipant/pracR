import React, { Component } from 'react';
class Shelf extends Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
    this.state = {
      shelfItems: [
        'Be Happy',
        'Always Smile',
        
      ]
    }
  }
  handleclick(item) {
     this.props.addItem(item);
  
  }
    onsubmit(username) {
      username.preventDefault();
    this.props.add(this.state.username);
  }

  onChangeName(evt) {
    this.setState({username:evt.target.value });
  }
  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}>
        <button 
        
        onClick={() => this.handleclick(item)}>[+]</button>{item}</li>
    });
    return (
      <div>
       
          <ul>
            {shelfItems}
          </ul>
            <form>
          <div>
            <label>
            Please list the items to track
              <input
              type = "text"
              placeholder = "Please Enter the items"
              value = { this.state.username } 
                onChange={(evt)=>{this.onChangeName(evt)}}
              /> 
            </label>
            <button>
                <input 
                  type ="submit"
                  onClick ={(username) => {this.onsubmit(username)}}
                />
            </button>

          </div>
           </form>
      </div>
    );
  }
}
export default Shelf;