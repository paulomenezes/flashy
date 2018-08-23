import React from 'react';
import { Provider } from 'react-redux';

import Flashy from './src';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <Flashy />
  </Provider>
);

export default App;
