import React from 'react';
import { View } from 'react-native';
import Nav from './Nav';
import MiniNav from './MiniNav';

const NavMenu = ({ fullMenu, toggleMenu }) => {
  if (fullMenu) {
    return (
      <View>
        <Nav toggleMenu={toggleMenu}/>
        <MiniNav toggleMenu={toggleMenu}/>
      </View>
    );
  }
  return <MiniNav toggleMenu={toggleMenu}/>;
};

export default NavMenu;
