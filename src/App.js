import React, { Component } from 'react';
import './App.scss';
import BootstrapNavbar from './components/BootstrapNavbar'
import history from './services/history'
import { Router } from 'react-router-dom'

import Routes from './routes'
class App extends Component {
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}
export default App;
