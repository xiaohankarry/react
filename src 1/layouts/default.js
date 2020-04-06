import React,{Component} from 'react'
console.log(React)

//引入头和尾
import Header from './header.js'
import Footer from './footer.js'
import Loaing from '../components/loading/loading'



import {Switch,Route,Redirect} from 'react-router-dom'

import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
// import NoPage from "../pages/NoPage";

export default class Default extends Component{
    render(){
      return (
        <div className="default">
          {/*<Loading/>*/}
          <Header/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/follow" component={Follow}/>
            <Route path="/column" component={Column}/>
            <Route path="/user" component={User}/>
            <Route path="/Login" component={Login}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/detail/:_id" component={Detail}/>
            <Redirect exact from="/" to="/home" />
            {/* <Route component={NoPage}/> */}
          </Switch>
          <Footer/>
        </div>
      )
    }
  }