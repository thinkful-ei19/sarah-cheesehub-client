import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCheeses } from './actions/cheeseAct';
import CheeseList from './components/cheese-list';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">All the Cheese!!!</h1>
        </header>
        <div className="cheeseList">
          <p className="App-intro">
          Do you even cheese, bro?
          </p>
          <CheeseList />
        </div>
      </div>
    );
  }
}

export default connect()(App);
