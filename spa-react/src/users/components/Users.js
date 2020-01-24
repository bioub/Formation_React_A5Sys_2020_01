import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { UserAdd } from './UserAdd';
import { UserDetails } from './UserDetails';
import { UsersListContainer } from '../containers/UsersListContainer';
import { UserDetailsContainer } from '../containers/UserDetailsContainer';

export function Users({match}) {
  return (
    <div className="Users">
      <h2>Users</h2>
      <nav>
        {/* <a href="/add">Add</a>
        <a href="/">List</a> */}
        <Link to={match.path + "/"}>List</Link>
        <Link to={match.path + "/add"}>Add</Link>
      </nav>
        <UsersListContainer path={match.path} />
      {/* <Route path="/" component={UsersList} exact={true} />
      <Route path="/add" component={UserAdd} /> */}
      <Switch>
        <Route path={match.path + "/add"} component={UserAdd} />
        <Route path={match.path + "/:id"} component={UserDetailsContainer} />
      </Switch>
    </div>
  );
}
