import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar'

import { Provider } from 'react-redux'
import store from './store'

import './App.css'
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          <TaskList />
        </div>
      </Provider>
    );
  }
}

export default App;
