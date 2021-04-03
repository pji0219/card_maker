import React from 'react';
import Login from './components/login/login';
import style from './app.module.css';

function App({ authService }) {
  return (
    <div className={style.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
