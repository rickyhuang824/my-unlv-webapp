import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import LoginPage from './pages/login'
import SchedulePage from './pages/schedule'

class App extends Component {
  componentDidMount(){
    document.title = "myUNLV"
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LoginPage} />
          <Route path='/schedule' component={SchedulePage} />
        </div>  
      </Router>
    )  
  }
}

export default App;
