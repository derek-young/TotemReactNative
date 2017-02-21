import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import localStyles from './ChooseVenueStyles';

export default ({ venue, selectVenue }) => (
  <TouchableOpacity
    style={localStyles.selection}
    onPress={(e) => selectVenue(venue.id)}>
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
