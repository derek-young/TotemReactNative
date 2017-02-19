import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Route, MemoryRouter as Router } from 'react-router';
import store from './store.js';
import styles from './styles';
import NavMenu from './components/Nav/NavMenu';
import MapViewer from './components/MapView/MapView';
import Rabble from './components/Rabble/Rabble';
import findMe from './components/locationWatcher';
import * as firebase from 'firebase';
import VenueSchedule from './components/VenueSchedule/VenueSchedule';
import InviteFriends from './components/InviteFriends/InviteFriends';

class App extends React.Component {
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
    console.log(this.props.dispatch);
    return (
      <Router>
        <View style={styles.container}>
          <NavMenu dispatch={this.props.dispatch}/>
          <Route exact path="/" component={MapViewer}/>
          <Route path="/rabble" component={() => (<Rabble dispatch={this.props.dispatch}/>)}/>
          <Route path="/agenda" component={() => <View><Text>User Schedule Holder</Text></View>}/>
          <Route path="/schedule" component={VenueSchedule}/>
          <Route path="/emergency" component={() => <View><Text>Emergency Info Holder</Text></View>}/>
          <Route path="/invite" component={InviteFriends}/>
        </View>
      </Router>
    );
  }
}

export default connect((store) => {
  return {
    app: store.app,
    nav: store.nav,
    rabble: store.rabble
  };
})(App);
