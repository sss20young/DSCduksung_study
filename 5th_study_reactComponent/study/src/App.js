import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeTemplate from './components/HomeTemplate'
import SignupTemplate from './components/SignupTemplate';
import LoginTemplate from './components/LoginTemplate';
import NoticeBoardTemplate from './components/NoticeBoardTemplate';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component = { HomeTemplate } exact={ true }/>
          <Route path="/signup" component = { SignupTemplate } />
          <Route path="/login" component = { LoginTemplate } />
          <Route path="/noticeboard" component = { NoticeBoardTemplate } />
        </Switch>
    </div>
  );
};

export default App;