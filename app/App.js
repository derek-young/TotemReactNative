import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Hello World</Text>
      </View>
    );
  }
}
