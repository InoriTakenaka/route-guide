import React, { Component } from 'react'
import Home from './view/home'
import Login from './view/login'
import User from './view/user'
import {Route,Link,Routes} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <h3>react router demo</h3>
        <hr/>
        <ul>
          <li>
            {/**
             * 跳转url
             */}
           <Link to='/home'> Home </Link>
          </li>
          <li>
            <Link to='/user'> User</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
          </li>
        </ul>
        <hr/>
        {/**
         * react-router v6 新语法
         * 监听url改变的组件Route 必须写到 Routes 组件里
         * <Route>组件的作用：根据url的变化，显示我们需要他显示的组件
         * path属性就是要匹配的url
         * element属性表示url匹配成功之后，需要渲染的组件
         */}
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/login' element={<Login/>}/>   
        </Routes>                 
      </div>
    )
  }
}


/**
 * rfc: 快速生成和文件名同名的function组件
 * rcc：快速生成和文件名同名的class组件
 */