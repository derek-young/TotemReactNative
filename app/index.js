import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Nav from './containers/Nav/Nav';
import MiniNav from './containers/Nav/MiniNav';
import Map from './components/MapView';
import Rabble from './containers/Rabble/Rabble';
import VenueSchedule from './components/VenueSchedule';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user_fb_id: '444abc',
      selected: 5,
      rabble: [
        { fb_id: '111abc', group_id: '12345', name: 'Smirti', img: '../../img/smirti.png' },
        { fb_id: '222abc', group_id: '12345', name: 'John', img: '../../img/john.jpg' },
        { fb_id: '333abc', group_id: '12345', name: 'Pat', img: '../../img/pat.png' },
        { fb_id: '444abc', group_id: '12345', name: 'Derek', img: '../../img/derek.jpg' }
      ],
      rabble_loc: {
        '111abc': { fb_id: '111abc', group_id: '12345', lat: 37.7707546, long: -122.4860556 },
        '222abc': { fb_id: '222abc', group_id: '12345', lat: 37.768380, long: -122.493931 },
        '333abc': { fb_id: '333abc', group_id: '12345', lat: 37.767998, long: -122.492182 },
        '444abc': { fb_id: '444abc', group_id: '12345', lat: 37.767236, long: -122.493889 }
      }
    };

    this.views = [
      <Map />,
      <Rabble rabble={this.state.rabble} rabble_loc={this.state.rabble_loc}/>,
      <View><Text>User Schedule Holder</Text></View>,
      <VenueSchedule />,
      <View><Text>Emergency Info Holder</Text></View>,
      <Nav swapView={this.swapView.bind(this)}/>
    ];
  }

  render() {
    if (this.state.selected === 5) {
      return (
        <View style={styles.container}>
          {this.views[this.state.selected]}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <MiniNav swapView={this.swapView.bind(this)}/>
        {this.views[this.state.selected]}
      </View>
    );
  }

  swapView(index) {
    this.setState({
      selected: index
    });
  }
}
