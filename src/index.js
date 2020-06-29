import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Header from './header';
import App from './App';

ReactDOM.render(
  <div>
    <Header/>
    <div className="main">
      <App/>
    </div>
  </div>,
  document.getElementById('root')
);