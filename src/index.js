import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * 只有处在<BrowserRouter>标签范围内的代码 才可以使用react-router的路由功能
 */
