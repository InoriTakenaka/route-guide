import React, { Component } from 'react'
import Header from './view/index/Header'

import { Routes, Route } from 'react-router-dom'
import './App.module.css'
import HomePage from './view/index/HomePage'
import User from './view/home/User'
import Login from './view/home/Login'
import News from './view/home/News'
import About from './view/home/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/user' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/News' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    )
  }
}
