import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from './container/register'
import './App.css';
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App background">
      <Navbar />
        <Router>

            <Route exact path="/" component={Register} />
          {/* <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
