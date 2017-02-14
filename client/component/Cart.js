import React from 'react';
import { Component } from 'react';
import Shelf from './shelf';
import { Link } from 'react-router';
import Dashboard from './Dashboard';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() 
  {
      console.log(this.props.cart);
    const cartList = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });
    
    return (
        
      <div>
        <Link to = {`/Dashboard`}> 
                   <button>Dashboard</button>
                   </Link>
                     <Link to = {`/Logout`}> 
                   <button>Logout</button>
                   </Link>
         
        <Shelf 
        addItem = { this.props.addToCart } 
        add = {(text) =>this.props.addfromtext(text)}
        />
      
      
        <ol>
            {cartList}
        </ol>
      </div>
     );
  }
}


export default Cart;

