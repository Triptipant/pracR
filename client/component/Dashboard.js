    import React from 'react';
    import { Link } from 'react-router';
    import DashboardList from './DashboardList'
    import Dashparams from './Dashparams';
    import Cart from './Cart';
    import Logout from './Logout';

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
  
  }
  render() {
    console.log(list);
      const list = this.props.dashboard.map((item, idx) => {
        return <li key={idx}>{item.email}
     </li>
    });
      
    
    return (
           
      <div>
         <Link to = {`/Cart`}> 
                   <button>Cart</button>
                   </Link>
                     <Link to = {`/Logout`}> 
                   <button>Logout</button>
                   </Link>
            <div >
              <h1>Add list </h1><br/>
            <DashboardList 
            addItem = { this.props.addComment } 
            />
            </div>
            <div> {list}</div>
       
      </div>
    );
  }
}

Dashboard.propTypes = {
  list: React.PropTypes.array,
  addComment: React.PropTypes.func,
};
   