import React from 'react';
import { Image, Text, View } from 'react-native';
import { getGeofence } from '../../actions/rabbleActions'
import store from '../../store';
import styles from '../../styles';
import rabbleStyles from './RabbleStyles';

const RabbleRow = ({ friend }) => {
  const geoFences = store.getState().app.geoFences;
  const rabbleLoc = store.getState().rabble.rabbleLoc;
  return (
    <View>
      <View style={rabbleStyles.main}>
        <Image style={rabbleStyles.profile_img} source={{ uri: friend.img }}/>
        <View>
          <Text style={rabbleStyles.text}>{friend.name}</Text>
          <Text style={rabbleStyles.subtext}>
            {getGeofence(rabbleLoc[friend.fb_id].lat, rabbleLoc[friend.fb_id].long, geoFences)}
          </Text>
        </View>
      </View>
      <View style={styles.thinLine} />
    </View>
  );
};

export default RabbleRow;
