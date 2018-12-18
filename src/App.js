import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Home from './components/pages/Home';
import CreateCourse from './components/admin/CreateCourse';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/courses' component={CreateCourse} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
