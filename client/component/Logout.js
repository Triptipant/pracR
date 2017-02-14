import React from 'react';
import { Link } from 'react-router';

const Logout = React.createClass({



    render() {
        return (
            <div>
                <div>
                    Thank You !
                </div>
                <div>
                    <Link to ="/">
                        <button>Login </button>
                    </Link>
                </div>
             </div>

        );
    }
})

export default Logout;