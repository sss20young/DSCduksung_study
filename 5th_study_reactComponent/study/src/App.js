import React from 'react';
import './App.css';
import SignupTemplate from './components/SignupTemplate';
import LoginTemplate from './components/LoginTemplate';
import NoticeBoardTemplate from './components/NoticeBoardTemplate';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact={ true }/>
          <Route path="/signup" component = { SignupTemplate } />
          <Route path="/login" component = { LoginTemplate } />
          <Route path="/noticeboard" component = { NoticeBoardTemplate } />
        </Switch>
    </div>
  );
};

export default App;