import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <List title="Frutas" items={['Maçã', 'Laranja']}/>
        </div>
      </div>
    );
  }
}

export default App;
