import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './App'; // 如果您修改的是 App.js，這行可能是 import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);