import React, { Component } from 'react'
import style from './sidemenu.module.css'
export default class Sidemenu extends Component {
  render() {
    return (
          <nav className={style.sidenav}>            
              <ul>              
                  <li>
                    <a href="#">
                    <h3>side menu</h3>
                    </a>
                    <a href="/home/video">
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="/home/sidemenu2">
                    side menu item2
                    </a>
                  </li>
                  <li>
                    <a href="/sidemenu">
                    side menu item3
                    </a>
                  </li>
              </ul>
          </nav>
    )
  }
}
