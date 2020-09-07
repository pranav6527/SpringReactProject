import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
    <div className="container mt-2">
      <Switch>
        <Route path="/" exact component = {ListEmployeeComponent}></Route>
        <Route path="/employees" component = {ListEmployeeComponent}></Route>
        <Route path="/addemployees" component = {CreateEmployeeComponent}></Route>
        <Route path="/updateemployee/:id" component = {UpdateEmployeeComponent}></Route>
      </Switch>
    </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
