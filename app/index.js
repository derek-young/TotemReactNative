import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Nav from './containers/Nav/Nav';
import MiniNav from './containers/Nav/MiniNav';
import MapViewer from './components/MapView';
import Rabble from './containers/Rabble/Rabble';
import VenueSchedule from './components/VenueSchedule';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user_fb_id: '444der',
      selected: 1,
      rabble: [
        { fb_id: '111smi', group_id: '12345', name: 'Smirti', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '222john', group_id: '12345', name: 'John', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '333pat', group_id: '12345', name: 'Pat', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '444der', group_id: '12345', name: 'Derek', img: 'https://facebook.github.io/react/img/logo_og.png' }
      ],
      rabble_loc: {
        '111smi': { fb_id: '111smi', group_id: '12345', lat: 37.76998, long: -122.49298 },
        '222john': { fb_id: '222john', group_id: '12345', lat: 37.76772, long: -122.49438 },
        '333pat': { fb_id: '333pat', group_id: '12345', lat: 37.76757, long: -122.49427 },
        '444der': { fb_id: '444der', group_id: '12345', lat: 37.76837, long: -122.48994 }
      },
      geo_fences: [
        { name: 'Lands End Stage', type: 'venue', lat: 37.76766, long: -122.49479, radius: 50 },
        { name: 'Sutro Stage', type: 'venue', lat: 37.76992, long: -122.49341, radius: 50 },
        { name: 'Panhandle Stage', type: 'venue', lat: 37.76984, long: -122.48619, radius: 30 },
        { name: 'Twin Peaks Stage', type: 'venue', lat: 37.76974, long: -122.48303, radius: 30 },
        { name: 'Basecamp', type: 'group', lat: 37.7683, long: -122.49002, radius: 10 }
      ]
    };

    this.views = [
      <MapViewer />,
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

  getDegrees(meters) {
    return meters / 100000;
  }
}
