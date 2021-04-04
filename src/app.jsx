import React from 'react';
import Login from './components/login/login';
import style from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={style.app}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <Maker authService={authService} />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
