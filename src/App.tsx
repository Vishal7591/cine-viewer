/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import Screens from './components/Screens';
import {store} from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
}

export default App;
