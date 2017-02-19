import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './app/store.js';

export default class Rabble extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <App />
        </Provider>
      </View>
    );
  }
}

AppRegistry.registerComponent('Rabble', () => Rabble);
