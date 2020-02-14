import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from 'trivia-main';
import Home from './modules/Home';
import Trivia from './modules/Trivia';

const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/test">
      <div>TEST</div>
    </Route>
    <Route exact path="/trivia/:questionId">
      <Trivia />
    </Route>
    <Route>
      <Home />
    </Route>
  </Switch>
);

function App(){
  return (
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>
  );
}

export default App;
