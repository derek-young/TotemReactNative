import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import navStyles from './NavStyles';

const MiniNav = ({ toggleMenu }) => (
  <View style={navStyles.mini}>
    <TouchableHighlight style={navStyles.highlight} onPress={() => toggleMenu()}>
      <View>
        <View style={navStyles.miniBar}></View>
        <View style={navStyles.miniBar}></View>
        <View style={navStyles.miniBar}></View>
      </View>
    </TouchableHighlight>
  </View>
);

export default MiniNav;
