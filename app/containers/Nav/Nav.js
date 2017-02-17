import React, { Component, PropTypes } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import styles from './NavStyles';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'welcome',
      menuItems: [
        'Home (Map View)',
        'Friends',
        'Your Schedule',
        'Venue Schedule',
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
              style={styles.button}
              onPress={() => {
                this.props.updateSelected(index);
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
