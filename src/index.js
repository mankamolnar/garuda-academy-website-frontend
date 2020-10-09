import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import './components/common/common.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
