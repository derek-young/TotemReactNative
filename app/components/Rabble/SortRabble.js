import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import rabbleStyles from './RabbleStyles';

const SortRabble = ({ sortRabble }) => (
  <View style={rabbleStyles.sort_row}>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => sortRabble('alpha')}>
      <Image source={require('../../img/a-z-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => sortRabble('geofence')}>
      <Image source={require('../../img/fence-icon.png')}/>
    </TouchableHighlight>
    <TouchableHighlight
      style={rabbleStyles.sort_item}
      onPress={() => sortRabble('proximity')}>
      <Image source={require('../../img/radar-icon.png')}/>
    </TouchableHighlight>
  </View>
);


export default SortRabble;
