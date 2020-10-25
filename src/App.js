import logo from './logo.svg';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import SingleDept from './components/SingleDept';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/department/:id">
            <SingleDept />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
