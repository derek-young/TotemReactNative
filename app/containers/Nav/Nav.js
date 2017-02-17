import React, { Component, PropTypes } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import styles from './NavStyles';
const styles = StyleSheet.create({
  button: {
    paddingTop: 100,
    borderBottomColor: '#000',
    borderBottomWidth: 1
  }
});

export default class NavigatorIOSApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'welcome',
      menuItems: [
        'Home (Map View)',
        'Friends',
        'Meeting Places',
        'Your Schedule',
        'Venue Schedule',
        'Emergency Info'
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.menuItems.map((item) => (
          <Button
            style={styles.button}
            onPress={function(){console.log({item})}}
            title={item}
            color="#841584"
            accessibilityLabel={`Navigate to the ${item} view`}
          />
        ))}
      </View>
    );
  }
}
