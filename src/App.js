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
import AboutPD from './components/pages/AboutPD';
import AboutKC from './components/pages/AboutKC';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CourseDetails from './components/courses/CourseDetails';
import CourseSignup from './components/courses/CourseSignup';
import SignupMessage from './components/courses/SignupMessage';
import SignupSuccess from './components/auth/SignupSuccess';
import ConfirmCourse from './components/courses/ConfirmCourse';
import ConfirmCancel from './components/courses/ConfirmCancel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={AboutPD} />
            <Route path='/contact' component={Contact} />
            <Route path='/courses' component={Courses} />
            <Route path='/aboutpd' component={AboutPD} />
            <Route path='/aboutkc' component={AboutKC} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/course/:id' component={CourseDetails} />
            <Route path='/coursesignup/:id' component={CourseSignup} />
            <Route path='/signupmessage' component={SignupMessage} />
            <Route path='/signupsuccess' component={SignupSuccess} />
            <Route path='/confirmcourse' component={ConfirmCourse} />
            <Route path='/confirmcancel' component={ConfirmCancel} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
