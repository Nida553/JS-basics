import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home'
import EditBlog from "./Pages/EditBlog";
import Bloglist from "./Pages/BlogList";
import BlogDetail from "./Pages/BlogDetail";
import AddProject from "./Pages/Projects/AddProject";
import ListProject from "./Pages/Projects/ListProject";
import ListProjects from './Pages/Projects/ListProjects';
import tailwindList from "./Pages/Projects/tailwindList";
import Login from "./Pages/Login";

export default class Routes extends Component {
    render() {
        return (
           
                <Switch>
            <Route path="/home" exact  component={Home}/>
            <Route path="/contact" exact component={ContactUs}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/about" exact component={About}/>
            <Route path="/nav" exact component = {Navbar}/>
            <Route path ="/edit" component = {EditBlog}/>
            <Route exact path = "/blogs" component = {Bloglist}/>
            <Route exact path = "/projects/add" component ={AddProject} />
            <Route exact path = "/blog/:id" component = {BlogDetail} />
            <Route exact path ="/add" component = {AddProject} />
            {/* <Route exact path = "/projects" component = {ListProject} /> */}
            <Route exact path = "/projects" component = {ListProjects} />
            <Route exact path = "/list" component = { tailwindList} />
            <Route exact path = "/login" component = {Login} />
            <Redirect to="/" />
            {/* <Route exact path = "/registerType" component = {typescript/Register} /> */}

                        </Switch>
           
        )
    }
}