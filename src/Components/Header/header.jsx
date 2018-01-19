import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <span>{this.props.data}</span>
            </div>
        );
    }
}

export default Header;