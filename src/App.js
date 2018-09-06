import React, { Component } from 'react';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slider from "./component/Slider";

class App extends Component {
  render() {
    return (
	    <Router>
	      <div className="app">
		      <NavBar/>
		      <Slider/>
	      </div>
	    </Router>

    );
  }
}

export default App;


