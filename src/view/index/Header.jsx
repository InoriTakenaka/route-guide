import React from 'react'
import style from './header.module.css'
export default function header() {
  return (
      <div>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <a href="#/">React Router Demo</a>
                    </li>
                    <li>
                        <a href="#">MENU1</a>
                    </li>
                    <li>
                        <a href="#">MENU2</a>
                    </li>
                    <li>
                        <a href="#">MENU3</a>
                    </li>
                </ul>
            </nav>        
      </div>
   
  )
}
