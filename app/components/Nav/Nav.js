import React from 'react';
import { Text, View } from 'react-native';
import NavLink from './NavLink';
import navStyles from './NavStyles';
import styles from '../../styles';
import store from '../../store';

const Nav = ({ dispatch }) => (
  <View>
    {store.getState().nav.menuItems.map((item, index) => (
      <View key={index}>
        <NavLink to={item.path} dispatch={dispatch}>
          <Text style={navStyles.text}>
            {item.label}
          </Text>
        </NavLink>
        <View style={styles.line} />
      </View>
    ))}
  </View>
);

export default Nav;
