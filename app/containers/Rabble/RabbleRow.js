import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../styles';
import rabbleStyles from './RabbleStyles';

const RabbleRow = ({ friend, rabble_loc, geo_fences }) => (
  <View>
    <View style={rabbleStyles.main}>
      <Image style={rabbleStyles.profile_img} source={{ uri: friend.img }}/>
      <View>
        <Text style={rabbleStyles.text}>{friend.name}</Text>
        <Text style={rabbleStyles.subtext}>{getGeofence(rabble_loc[friend.fb_id].lat, rabble_loc[friend.fb_id].long, geo_fences)}</Text>
      </View>
    </View>
    <View style={styles.thinLine} />
  </View>
);

function getGeofence(lat, long, geoFences) {
  for (let fence of geoFences) {
    const degrees = getDegrees(fence.radius);
    const latDiff = Math.abs(fence.lat - lat);
    const longDiff = Math.abs(fence.long - long);

    if (latDiff < degrees && longDiff < degrees) {
      return fence.name;
    }
  }
  return '';
}

function getDegrees(meters) {
  return meters / 100000;
}

export default RabbleRow;
