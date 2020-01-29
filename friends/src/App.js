import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from "./components/FriendList";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={FriendList} />  
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>

    </Router>
  );
}

export default App;
