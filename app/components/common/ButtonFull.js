import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../../styles';

const ButtonFull = ({ onPress, title }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.buttonFull}>
      <Text style={styles.textMed}>{title}</Text>
    </View>
  </TouchableHighlight>
);

export default ButtonFull;
