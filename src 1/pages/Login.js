import React from 'react'
import '../assets/css/login.css'
import Nav from '../components/v-nav'
import UcButton from '../components/v-button'
import ViInput from '../components/v-input'

//没激活状态的link
import {Link} from 'react-router-dom'
//修改数据类型
import qs from 'qs';

export default class Login extends React.Component{

    state = {
        username:'',
        password:'',
        errormess:''
    }
    login = async ()=>{
        let params = new URLSearchParams();
        params.append('username',this.state.username);
        params.append('password',this.state.password);
        let res = await this.axios({
            url:'/api/login',
            method:'post',
            data:params
        });
        if(res.data.err===0){
            //同步中下token
            window.localStorage.setItem('user',qs.stringify(res.data));
            //登入后跳入登入之前的页面
            this.props.history.push({
                pathname:qs.parse(this.props.localtion.search,{ignoreQueryPrefix:true}).path
            })
        }else {
            //就返回数据库中的msg错误提示
            this.setState({errormess:res.data.msg})
        }
    };
    //改值实现受控
    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render(){
        let {username,password} = this.state;
        return (
            <div className='content'>
                <Nav arrow='gary' borderWidth={0} bgColor='transparent'/>
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
          <ViInput label="用户" model={{name:'username',value:username,onChange:this.changeIpt}}/>
          <ViInput
            label="密码"
            type="password"
            model={{name:'password',value:password,onChange:this.changeIpt}}
          />
        </ul>
        <div className="footbox">
          <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.login}>登录录</UcButton>
          {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
          {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
          <a className="tishi">忘记密码？</a>
        </div>
            </div>
        )
    }
}