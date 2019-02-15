import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import Founders from './components/pages/Founders';
import International from './components/pages/International';
import Literature from './components/pages/Literature';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CourseDetails from './components/courses/CourseDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/courses' component={Courses} />
            <Route path='/founders' component={Founders} />
            <Route path='/international' component={International} />
            <Route path='/literature' component={Literature} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/course/:id' component={CourseDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
