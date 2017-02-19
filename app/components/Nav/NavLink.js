import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';
import { toggleMenu } from '../../actions/navActions';
import navStyles from './NavStyles';

const NavLink = ({ to, children, dispatch }, context) => (
  <TouchableHighlight
    style={navStyles.main}
    onPress={() => {
      dispatch(toggleMenu(false));
      context.router.push(to);
    }}>
    {children}
  </TouchableHighlight>
);

NavLink.contextTypes = { router: PropTypes.object }

export default NavLink;
