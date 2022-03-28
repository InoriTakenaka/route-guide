import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
      <h3>login contents</h3>
      <hr/>
      <div>
          <label htmlFor='username'>UserName
            <input id='username' type='text' placeholder='Your UserName here'/>
          </label>
          </div>
          <div>
          <label htmlFor='password'>Password
            <input id='passowrd' type='password' placeholder='Your Password here'/>
          </label>
          </div>         
      
      </div>
    )
  }
}
