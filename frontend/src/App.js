import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User.js';
import UserDetails from './components/UserDetails';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.userReducer;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User/>
        <br/><br/>
        <UserDetails/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(App);
