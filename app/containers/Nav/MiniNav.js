import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './NavStyles';

const MiniNav = ({ swapView }) => (
  <View style={styles.mini}>
    <TouchableHighlight style={styles.highlight} onPress={() => swapView(5)}>
      <View>
        <View style={styles.miniBar}></View>
        <View style={styles.miniBar}></View>
        <View style={styles.miniBar}></View>
      </View>
    </TouchableHighlight>
  </View>
);

export default MiniNav;
