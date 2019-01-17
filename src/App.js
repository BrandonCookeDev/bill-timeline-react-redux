import React, { Component } from 'react';
import SalaryForm from './components/SalaryForm';
import SalaryCalculator from './components/SalaryCalculator'
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store'
import BillForm from './components/BillForm';
import BillList from './components/BillList';

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
          <SalaryCalculator />
        </div>
        <br/>
        <hr/>
        <div class="container">
          <BillForm />
          <BillList />
        </div>
      </Provider>
    );
  }
}

export default App;
