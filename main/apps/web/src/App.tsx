import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'trivia-main';
import routes from './routes';
import Layout from './components/Layout';

import 'normalize.css';

function App(){
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          {routes}
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
