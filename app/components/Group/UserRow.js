import React from 'react';
import { Image, Text, View } from 'react-native';
import { getGeofence } from '../../actions/locationActions'
import store from '../../store';
import styles from '../../styles';
import localStyles from './GroupStyles';

const UserRow = ({ friend }) => {
  const geoFences = store.getState().location.geoFences;
  return (
    <View>
      <View style={localStyles.main}>
        <Image style={localStyles.profile_img} source={{ uri: friend.img }}/>
        <View>
          <Text style={localStyles.text}>{friend.name}</Text>
          <Text style={localStyles.subtext}>
            {getGeofence(friend.coordinates, geoFences)}
          </Text>
        </View>
      </View>
      <View style={styles.thinLine} />
    </View>
  );
};

export default UserRow;
