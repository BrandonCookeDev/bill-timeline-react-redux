import React, { Component } from 'react'
import SalaryForm from './components/SalaryForm'
import SalaryCalculator from './components/SalaryCalculator'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from './redux/store'
import BillForm from './components/BillForm'
import BillList from './components/BillList'
import Timeline from './components/Timeline'

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
        
          <div class="row">
            <div class="col">  
              <SalaryForm />
            </div>
            <div class="col">
              <SalaryCalculator />
            </div>  
          </div>

          <hr/>

          <div class="row">
            <div class="col">  
              <BillForm />
            </div>
            <div class="col">
              <BillList />
            </div>                      
          </div>

          <hr/>

          <div class="row">
            <div class="col">
              <Timeline />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
