import React, { Component } from 'react';
import SalaryForm from './components/SalaryForm';
import SalaryCalculator from './components/SalaryCalculator'
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div class="container">
          <SalaryForm />
          <hr/>
          <SalaryCalculator />
        </div>
      </Provider>
    );
  }
}

export default App;
