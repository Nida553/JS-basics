import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import list from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Pages/Home';
import React from "react";
import Routes from './Routes';
import Navbar from './Pages/Navbar'
import './Style.css';
function App() {

  return (
  <div className = "App">
<h1>Welcome to the site</h1>
<p>Choose one of styles or cutomize easily your site following your ideas.
More demos are coming soon.</p>
    
   {/* <Navbar/> */}
 <Router>
   <Routes/>
 </Router>
  </div>
  
   
  );
}

export default App;
