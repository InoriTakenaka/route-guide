import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './Index/Header'
import HomePage from './Index/HomePage'
import User from './Views/User'
import Video from './Views/Home/Video'
import Stream from './Views/Home/Stream'
export default class App extends Component {
  render() {
    return (
        <div>
              <Header/>
              <Routes>
                <Route path='/home' element={<HomePage />} >
                  {
                    /**
                     * 新版本中二级路由的配置：
                     * 直接在父级路由的Route标签内，配置二级路由
                     */

                  }
                   <Route path='/home/video' element={<Video/>}/>
                   <Route path='/home/stream' element={<Stream/>}/>
                </Route>                
                <Route path='/user' element={<User/>} />
              </Routes>
        </div>
    
    )
  }
}
