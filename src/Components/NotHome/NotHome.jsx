import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NotHome extends Component {
    render() {
        return (
            <div>
                <span>This isnt the home page</span>
                <Link to ='/'>
                <button>Go back</button>
                </Link>
            </div>
        );
    }
}

export default NotHome;