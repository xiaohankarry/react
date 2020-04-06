import React from 'react'
import '../assets/css/login.css'
import Nav from '../components/v-nav'
import UcButton from '../components/v-button'
import ViInput from '../components/v-input'
import {Link} from 'react-router-dom'

export default class Reg extends React.Component{
    show= ()=>{
        alert("han")
    }
    state={
        username : 'hanhan'
    }
    changeUserName = (ev)=>{
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }
    render(){
        let {username} = this.state;
        return (
            <div className='content'>
                 <Nav arrow="gray" borderWidth={0} bgColor="transparent"/>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <ViInput label="用户"/>
          <ViInput label="密码" type="password"/>

        </ul>
        <div className="footbox">
          <UcButton style={{marginTop:'0.64rem'}}>注册</UcButton>
          <a className="tishi">忘记密码？</a>
        </div>
            </div>
        )
    }
}