import React from 'react';
import { View } from 'react-native';
import Nav from './Nav';
import MiniNav from './MiniNav';
import store from '../../store';

const NavMenu = ({ dispatch }) => {
  if (store.getState().nav.fullMenu) {
    return (
      <View>
        <Nav dispatch={dispatch}/>
        <MiniNav dispatch={dispatch}/>
      </View>
    );
  }
  return <MiniNav dispatch={dispatch}/>;
};

export default NavMenu;
