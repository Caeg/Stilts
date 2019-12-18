import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages//Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {SignUp} from './Pages/SignUp';
import {Woopsie} from './Pages/Woopsie';
import {Layout} from './Components/Layout';
import {NavigationBar} from './Components/NavigationBar';
import { WhatStilts } from './Components/WhatStilts';
import styled from 'styled-components';





class App extends Component {
  render(){
  return (
    <React.Fragment>
      <NavigationBar />
        <Router>
            <Switch>
              <Route exact path="/" component = {Home}/>
              <Route path="/about" component = {About}/>
              <Route path ="/SignUp" component = {SignUp}/>
              <Route path="/contact" component = {Contact}/>
              <Route component={Woopsie}/>
            </Switch>
        </Router>
      
     
    </React.Fragment>
    );
  }
}

export default App;
