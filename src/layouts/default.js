import React,{Component} from 'react'


//引入头和尾
import Header from './header.js'
import Footer from './footer.js'
import Loading from '../components/loading/loading'



import {Switch,Route,Redirect} from 'react-router-dom'

import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import NoPage from "../pages/NoPage";

//发布状态
import pubsub from 'pubsub-js'
import loading from '../components/loading/loading'

export default class Default extends Component{

  state={
    bNav:false,
    bFoot:false,
    bLoading:false
  };

  constructor(props){
    super()

    pubsub.subscribe('UPDATE_LOADING',(mess,data)=>{
      this.setState({bLoading:data})
    })
  }

  //判断页面当中是否有头部和尾部
  static getDerivedStateFromProps(nextProps,nextState){
    let path = nextProps.location.pathname;
    if(/home|follow|column/.test(path)){
      return {
        bNav:true,
        bFoot:true
      }
    }

    if(/login|reg|detail/.test(path)){
      return {
        bNav:false,
        bFoot:true
      }
    }

    if(/user/.test(path)){
      return {
        bNav:false,
        bFoot:true
      }
    }
  }
    render(){
      let {bFoot,bLoading,bNav} = this.state
      return (
        <div className="default">
          {bLoading && <Loading/>}
         {bNav && <Header/>}
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/follow" component={Follow}/>
            <Route path="/column" component={Column}/>
            <Route path="/user" component={User}/>
            <Route path="/Login" component={Login}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/detail/:_id" component={Detail}/>
            <Redirect exact from="/" to="/home" />
            <Route component={NoPage}/>
          </Switch>
          {bFoot ? <Footer/> : null}
        </div>
      )
    }
  }