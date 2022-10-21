import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Login';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Page404 from './Page404'
import Axios from 'axios';

function App() {

  const [loginStatus, SetloginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      SetloginStatus(response.data.loggedIn)
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Dashboard loggedIn={loginStatus} />}></Route>
        <Route path="/login" component={() => <SignIn loggedIn={loginStatus} />}></Route>
        <Route path="/home" component={() => <Dashboard loggedIn={loginStatus} />}></Route>
        <Route path="*" component={() => <Page404 />}></Route>
      </Switch>
    </Router>
  )
}

export default App