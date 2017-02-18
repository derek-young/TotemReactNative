import React, { Component, PropTypes } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import styles from '../../styles';
import navStyles from './NavStyles';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'welcome',
      menuItems: [
        'Map',
        'Rabble',
        'Personal Agenda',
        'Schedule/Set List',
        'Emergency Info'
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.menuItems.map((item, index) => (
          <View key={index}>
            <Button
              style={navStyles.button}
              onPress={() => {
                this.props.swapView(index);
              }}
              title={item}
              color="#1cafff"
              accessibilityLabel={`Navigate to the ${item} view`}
            />
            <View style={styles.line} />
          </View>
        ))}
      </View>
    );
  }
}
