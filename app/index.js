import React from 'react';
import { Text, View } from 'react-native';
import { Route, MemoryRouter as Router } from 'react-router';
import styles from './styles';
import NavMenu from './components/Nav/NavMenu';
import MapViewer from './components/MapView/MapView';
import Rabble from './components/Rabble/Rabble';
import findMe from './components/locationWatcher';
import * as firebase from 'firebase';
import VenueSchedule from './components/VenueSchedule/VenueSchedule';
import InviteFriends from './components/InviteFriends/InviteFriends';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userFbId: '444der',
      fullMenu: false,
      rabble: [
        { fb_id: '111smi', group_id: '12345', name: 'Smriti', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '222john', group_id: '12345', name: 'John', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '333pat', group_id: '12345', name: 'Pat', img: 'https://facebook.github.io/react/img/logo_og.png' },
        { fb_id: '444der', group_id: '12345', name: 'Derek', img: 'https://facebook.github.io/react/img/logo_og.png' }
      ],
      rabbleLoc: {
        '111smi': { fb_id: '111smi', group_id: '12345', lat: 37.76998, long: -122.49298 },
        '222john': { fb_id: '222john', group_id: '12345', lat: 37.76772, long: -122.49438 },
        '333pat': { fb_id: '333pat', group_id: '12345', lat: 37.76757, long: -122.49427 },
        '444der': { fb_id: '444der', group_id: '12345', lat: 37.76837, long: -122.48994 }
      },
      geoFences: [
        { name: 'Lands End Stage', type: 'venue', lat: 37.76766, long: -122.49479, radius: 50 },
        { name: 'Sutro Stage', type: 'venue', lat: 37.76992, long: -122.49341, radius: 50 },
        { name: 'Panhandle Stage', type: 'venue', lat: 37.76984, long: -122.48619, radius: 30 },
        { name: 'Twin Peaks Stage', type: 'venue', lat: 37.76974, long: -122.48303, radius: 30 },
        { name: 'Basecamp', type: 'group', lat: 37.7683, long: -122.49002, radius: 10 }
      ]
    };
  }

  componentWillMount() {
  // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBYzcVnUFZiLsR-XDhCKWMNVVw4sEN3syc",
      authDomain: "rabble-984ed.firebaseapp.com",
      databaseURL: "https://rabble-984ed.firebaseio.com",
      storageBucket: "rabble-984ed.appspot.com",
      messagingSenderId: "869569787907"
    };
    firebase.initializeApp(config);

    console.log(findMe.lat, findMe.long);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const locRef = rootRef.child('rabble_loc');
    locRef.on('value', snap => {
      rabble_loc: snap.val();
    })
  }

  render() {
    return (
      <Router>
        <View style={styles.container}>
          <NavMenu fullMenu={this.state.fullMenu} toggleMenu={this.toggleMenu.bind(this)}/>
          <Route exact path="/" component={MapViewer}/>
          <Route path="/rabble" component={() => (
            <Rabble
              userId={this.state.userFbId}
              rabble={this.state.rabble}
              rabbleLoc={this.state.rabbleLoc}
              geoFences={this.state.geoFences}
              sortRabble={this.sortRabble.bind(this)}
            />
          )}/>
          <Route path="/agenda" component={() => <View><Text>User Schedule Holder</Text></View>}/>
          <Route path="/schedule" component={VenueSchedule}/>
          <Route path="/emergency" component={() => <View><Text>Emergency Info Holder</Text></View>}/>
          <Route path="/invite" component={InviteFriends}/>
        </View>
      </Router>
    );
  }

  toggleMenu(hide = !this.state.fullMenu) {
    this.setState({
      fullMenu: hide
    });
  }

  sortRabble(method) {
    const sortedRabble = this.state.rabble.sort(sortAZ);
    console.log(sortedRabble);
    //Need to change how views are rendered for sort to work
    //this.views
    this.setState({
      rabble: sortedRabble
    });
  }
}

function sortAZ(a, b) {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}
