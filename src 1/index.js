import React from 'react';
import ReactDom from 'react-dom';

//引入全局样式，字体
import './utils/font'
import './assets/css/index.css'

//引入根组件
import Default from './layouts/default'
//全局引入
import './plugins/axios'
//结构路由里的组件,为了让Default获取上下文
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDom.render(
  <Router>
    <Route component={Default} />
  </Router>,
  document.getElementById('root')
);



