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
  handledelete(idx) {
    console.log(idx)
    console.log(this.props.deletelist(idx));
  }


  render()
   {
   
      const list = this.props.dashboard.map((item, idx) => {
        return <li key={idx}>{item.email}
          {/*<button onClick ={() => this.handledelete(idx)}>[-]
          </button>*/}
          
          
     </li>
    });
  
    console.log(this.props.loginadd);
    
      
    
    return (
           
      <div>
        {/*welcome {name}<br/>*/}
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
   