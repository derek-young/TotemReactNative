import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import localStyles from './GroupStyles';
import { sortUsers } from '../../actions/locationActions'

const SortGroup = ({ dispatch }) => (
  <View style={localStyles.sort_row}>
    <TouchableHighlight
      style={localStyles.sort_item}
      onPress={() => dispatch(sortUsers(sortAZ))}>
      <Image source={require('../../img/a-z-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={localStyles.sort_item}
      onPress={() => dispatch(sortUsers(sortGeofence))}>
      <Image source={require('../../img/fence-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={localStyles.sort_item}
      onPress={() => dispatch(sortUsers(sortProximity))}>
      <Image source={require('../../img/radar-icon.png')}/>
    </TouchableHighlight>
  </View>
);

function sortAZ(a, b) {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}

function sortGeofence(a, b) {
  console.log('geofence sort');
}

function sortProximity(a, b) {
  console.log('proximity sort');
}


export default SortGroup;
