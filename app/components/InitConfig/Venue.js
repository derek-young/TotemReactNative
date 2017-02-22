import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import localStyles from './ConfigStyles';

export default ({ venue, select }) => (
  <TouchableOpacity
    style={localStyles.selection}
    onPress={() => select(venue.id, venue.name)}>
    <Text style={styles.textMed}>{venue.name}</Text>
    <Text style={localStyles.textSm}>
      {
        venue.address.city + ', ' +
        venue.address.state + ' ' +
        venue.address.zip
      }
    </Text>
  </TouchableOpacity>
);
