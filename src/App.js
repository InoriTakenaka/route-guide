import React, { Component } from 'react'
import Header from './view/index/Header'
import Sidemenu from './view/index/Sidemenu'
import Home from './view/home/Home'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidemenu/>
        <div style={{float:'right'}}>
          <Home/>
        </div>
      </div>
    )
  }
}
