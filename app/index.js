import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Nav from './containers/Nav/Nav';
import MiniNav from './containers/Nav/MiniNav';
import Map from './components/MapView';
import Rabble from './components/FriendList';
import VenueSchedule from './components/VenueSchedule';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 5,
      views: [
        <Map />,
        <Rabble />,
        <View><Text>User Schedule Holder</Text></View>,
        <VenueSchedule />,
        <View><Text>Emergency Info Holder</Text></View>,
        <Nav swapView={this.swapView.bind(this)}/>
      ]
    }
  }

  render() {
    if (this.state.selected === 5) {
      return (
        <View style={styles.container}>
          {this.state.views[this.state.selected]}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.state.views[this.state.selected]}
        <MiniNav swapView={this.swapView.bind(this)}/>
      </View>
    );
  }

  swapView(index) {
    this.setState({
      selected: index
    });
  }
}
