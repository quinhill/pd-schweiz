import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SignIn />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
