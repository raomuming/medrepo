import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import Container from './container';
import Login from './pages/login';
import NavigationList from './pages/navigationlist';
import SubjectList from './pages/subjectlist';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const { location } = history;

/*
const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      {location.hash === '#/' ? <Redirect to="/login" /> : ''}
    </div>
  </HashRouter>
);*/

const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={NavigationList} />
      <Route path="/subjects" component={SubjectList} />
    </div>
  </HashRouter>
);

export default routes;
