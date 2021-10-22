import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: ''
  }

  handleUpdateValue = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={value}
            onChange={this.handleUpdateValue}
          />
          <p className="echo">Echo:</p>
          {/* {JSON.stringify(this.state)} */}
          <p>{this.state.value}</p>
        </div>
      </div>
    );
  }
}

export default App;
