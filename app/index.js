import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Nav from './containers/Nav/Nav';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Hello World</Text>
        <Nav />
      </View>
    );
  }
}
