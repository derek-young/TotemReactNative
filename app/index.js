import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Route, MemoryRouter as Router } from 'react-router';
import store from './store.js';
import styles from './styles';
import * as firebase from 'firebase';
import { Spinner } from './components/common';

import NavMenu from './components/Nav/NavMenu';
import MapViewer from './components/MapView/MapView';
import Rabble from './components/Rabble/Rabble';
import VenueSchedule from './components/VenueSchedule/VenueSchedule';
import InviteFriends from './components/InviteFriends/InviteFriends';
import CreateGroup from './components/CreateGroup/CreateGroup';
import LoginForm from './components/Auth/LoginForm';

class App extends React.Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBYzcVnUFZiLsR-XDhCKWMNVVw4sEN3syc",
      authDomain: "rabble-984ed.firebaseapp.com",
      databaseURL: "https://rabble-984ed.firebaseio.com",
      storageBucket: "rabble-984ed.appspot.com",
      messagingSenderId: "869569787907"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        console.log(firebase.auth().currentUser)

      /********************************************************************************/
        function success(pos) {
          var user = firebase.auth().currentUser
          //if (user) {  
            firebase.database().ref(`users/${user.uid}/coordinates`).set({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            });
            console.log(pos.coords.latitude)
            console.log(pos.coords.longitude)
          //}
        }

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        navigator.geolocation.watchPosition(success, error, options);
      /********************************************************************************/

      } else {
        this.setState({ loggedIn: false });
      }
    });

    // firebase.auth().signOut() //remove this if you're sick of logging in
  }

  componentDidMount() {
    // const rootRef = firebase.database().ref().child('react');
    // const locRef = rootRef.child('rabble_loc');
    // locRef.on('value', snap => {
    //   rabble_loc: snap.val();
    // })
  }

  render() {
    switch (this.state.loggedIn) {
      case true: return (
          <Router>
            <View style={styles.container}>
              <NavMenu dispatch={this.props.dispatch}/>
              <Route exact path="/" component={MapViewer}/>
              <Route path="/rabble" component={() => (<Rabble dispatch={this.props.dispatch}/>)}/>
              <Route path="/agenda" component={() => <View><Text>User Schedule Holder</Text></View>}/>
              <Route path="/schedule" component={VenueSchedule}/>
              <Route path="/emergency" component={() => <View><Text>Emergency Info Holder</Text></View>}/>
              <Route path="/create" component={CreateGroup}/>
              <Route path="/invite" component={InviteFriends}/>
            </View>
          </Router>
        );
      case false: return <LoginForm />;
      default: return <Spinner size="large" />;
    }
  }
}

export default connect((store) => {
  return {
    app: store.app,
    nav: store.nav,
    rabble: store.rabble
  };
})(App);
