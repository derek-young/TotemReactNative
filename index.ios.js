import React from 'react';
import { AppRegistry, View } from 'react-native';
import App from './app/index';

export default class Rabble extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('Rabble', () => Rabble);