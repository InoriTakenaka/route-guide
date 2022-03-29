import React, { Component } from 'react'
import Sidemenu from './Sidemenu'
import Video from '../Views/Home/Video'
import Stream from '../Views/Home/Stream'
import { Outlet} from 'react-router-dom'
export default class HomePage extends Component {
  render() {
    return (
      <div>
          <h3>HomePage</h3>
          <hr/>
          <Sidemenu/>
          {
            /**
             * react-router v6 中 新增的一个容器
             * 作用是 渲染子路由组件的内容
             * 例如： /home/video
             * outlet组件 负责渲染 video 中的内容
             */
          }
          <Outlet/>         
      </div>
    )
  }
}
