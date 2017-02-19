import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import navStyles from './NavStyles';
import { toggleMenu } from '../../actions/navActions';

const MiniNav = ({ dispatch }) => (
  <View style={navStyles.mini}>
    <TouchableHighlight
      style={navStyles.highlight}
      onPress={() => dispatch(toggleMenu())}>
      <View>
        <View style={navStyles.miniBar}></View>
        <View style={navStyles.miniBar}></View>
        <View style={navStyles.miniBar}></View>
      </View>
    </TouchableHighlight>
  </View>
);


export default MiniNav;
