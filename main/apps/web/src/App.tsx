import React from 'react';
import { Provider } from 'react-redux'
import { store } from 'trivia-main';
import Home from './modules/Home';

function App(){
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
