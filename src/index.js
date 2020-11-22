import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from '../src/routes';
import {Provider} from 'react-redux';
import '../src/config/ReactotronConfig';
import store from './store';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
