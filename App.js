import React from 'react';
import { Provider } from 'react-redux';

import Flashy from './src';
import store from './src/store';
import { setLocalNotification } from './src/utils/notifications';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <Flashy />
      </Provider>
    );
  }
}
