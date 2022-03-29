import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="#">App Brand</a>
                    </li>
                    <li>
                        <Link to="/home">HomePage</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
