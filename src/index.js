import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.module.css';
import AuthService from './service/auth_service';

const authService = new AuthService();
console.log(process.env.REACT_APP_FIREBASE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
