import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';
import navStyles from './NavStyles';

const NavLink = ({ to, children, toggleMenu }, context) => (
  <TouchableHighlight
    style={navStyles.main}
    onPress={() => {
      toggleMenu(false);
      context.router.push(to);
    }}>
    {children}
  </TouchableHighlight>
);

NavLink.contextTypes = { router: PropTypes.object }

export default NavLink;
