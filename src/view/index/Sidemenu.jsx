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
                    <a href="#">
                      side menu item1
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    side menu item2
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    side menu item3
                    </a>
                  </li>
              </ul>
          </nav>
    )
  }
}
