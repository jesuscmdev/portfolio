import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/app.scss';
import Header from './components/Header';

import About from './components/About'
import Home from './components/Home';


function App() {
  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])
  return (
    <Router>


      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/sobre-mi" component={About}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
