import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home'

export default class Routes extends Component {
    render() {
        return (
           
                <Switch>
            <Route path="/home" exact  component={Home}/>
            <Route path="/contact" exact component={ContactUs}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/about" exact component={About}/>
            <Route path="/nav" exact component = {Navbar}/>
                        </Switch>
           
        )
    }
}