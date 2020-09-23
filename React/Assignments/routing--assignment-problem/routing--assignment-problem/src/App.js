import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/users" 
              activeClassName="users-active" 
              activeStyle={{color: '#e60073', textDecoration: 'underline'}}
              >Users</NavLink> |&nbsp;
            <NavLink 
              to="/courses" 
              activeClassName="courses-active"
              activeStyle={{color: '#e60073', textDecoration: 'underline'}}
            >Courses</NavLink>
          </nav>
          <Switch>
            <Route path="/courses" component={Courses}/>
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
