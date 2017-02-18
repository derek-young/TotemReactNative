import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import navStyles from './NavStyles';
import NavLink from './NavLink';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { path: '/', label: 'Map' },
        { path: '/rabble', label: 'Rabble'},
        { path: '/agenda', label: 'Personal Agenda'},
        { path: '/schedule', label: 'Schedule/Set List'},
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.menuItems.map((item, index) => (
          <View key={index}>
            <NavLink to={item.path} toggleMenu={this.props.toggleMenu}>
              <Text style={navStyles.text}>
                {item.label}
              </Text>
            </NavLink>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    );
  }
}
