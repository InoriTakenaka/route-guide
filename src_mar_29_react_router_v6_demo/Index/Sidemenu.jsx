import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Sidemenu extends Component {
  render() {
    return (
      <nav>
          <ul>
            <li>
                <Link to="/home/video">Video</Link>
                
            </li>
            <li>
                <Link to="/home/stream">Stream</Link>
            </li>
          </ul>
      </nav>
    )
  }
}
