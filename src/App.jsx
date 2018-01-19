import React, { Component } from 'react';
import './App.css';
import './reset.css'
import { HashRouter, Route} from 'react-router-dom'
import Home from './Components/Home/home'


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Route exact path = '/' component={Home}/> 
      </div>
      </HashRouter>
    );
  }
}

export default App;
