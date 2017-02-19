import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import rabbleStyles from './RabbleStyles';
import { sortRabble } from '../../actions/rabbleActions'

const SortRabble = ({ dispatch }) => (
  <View style={rabbleStyles.sort_row}>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => dispatch(sortRabble(sortAZ))}>
      <Image source={require('../../img/a-z-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => dispatch(sortRabble(sortGeofence))}>
      <Image source={require('../../img/fence-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => dispatch(sortRabble(sortProximity))}>
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


export default SortRabble;
