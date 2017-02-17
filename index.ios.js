import React from 'react';
import { AppRegistry, View } from 'react-native';
import App from './app/App';

export default class Rabble extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('Rabble', () => Rabble);
