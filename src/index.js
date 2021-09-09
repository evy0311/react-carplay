import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/App';

import Dashboard from './react/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dashboard/>
  </React.StrictMode>,
  document.getElementById('root')
);
