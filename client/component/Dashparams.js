import { Link } from 'react-router';
import React from 'react';
export default class Dashparams extends React.Component {
    
  render() {
      console.log("12");

      console.log(this.props.list)

    return (
      <div>
        {this.props.list.length > 0 ? (
          this.props.list.map((v, idx) => (
            <div key={idx} className="bg-info text-info volunteer">
            {v.email}
            </div>
          ))
        ) : null}
      </div>
    );
  }
}
