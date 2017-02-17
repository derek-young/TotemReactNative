import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Nav from './containers/Nav/Nav';
import Map from './components/MapView';
import Friends from './components/FriendList';
import VenueSchedule from './components/VenueSchedule';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 5,
      views: [
        <Map />,
        <Friends />,
        <View><Text>User Schedule Holder</Text></View>,
        <VenueSchedule />,
        <View><Text>Emergency Info Holder</Text></View>,
        <Nav updateSelected={this.updateSelected.bind(this)}/>
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.views[this.state.selected]}
      </View>
    );
  }

  updateSelected(index) {
    this.setState({
      selected: index
    });
  }
}
