import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './modules/Home';
import Trivia from './modules/Trivia';
import TriviaResults from './modules/TriviaResults';
import NotFound from './modules/NotFound';


const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/trivia/results">
      <TriviaResults />
    </Route>
    <Route exact path="/trivia/new">
      <Trivia fetchNew={true} />
    </Route>
    <Route exact path="/trivia/:questionId">
      <Trivia />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default routes;