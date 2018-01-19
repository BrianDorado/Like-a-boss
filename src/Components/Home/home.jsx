import React, { Component } from 'react';
import Header from './../Header/header'; 
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            something: 'true'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            something: 'false'
        })
    }
    handleChange = () => {
        this.setState({
            something: 'neither true or false'
        })
    }

    render() {
        return (
            <div>
                <Header data ="America"/>
                <button onClick={this.handleClick}>Change State</button>       
            <h1>{this.state.something}</h1>  
            <input type="text" onChange={this.handleClick}/>
            <input type="text" onChange={this.handleChange} />
            <Link to = '/nothome'><button>Go home</button></Link>
            </div>
        );
    }
}

export default Home;