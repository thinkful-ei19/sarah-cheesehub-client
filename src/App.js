import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCheeses } from './actions/cheeseAct';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
