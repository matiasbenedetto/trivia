import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'trivia-main';
import routes from './routes';

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
