import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Route, MemoryRouter as Router } from 'react-router';
import store from './store.js';
import styles from './styles';
import firebase from './firebase';
import { Spinner } from './components/common';
import geolocation from './components/MapView/geolocation'
import NavMenu from './components/Nav/NavMenu';
import MapViewer from './components/MapView/MapView';
import Group from './components/Group/Group';
import VenueSchedule from './components/VenueSchedule/VenueSchedule';
import InviteFriends from './components/InitConfig/InviteFriends';
import CreateGroup from './components/InitConfig/CreateGroup';
import ChooseVenue from './components/InitConfig/ChooseVenue';
import LoginForm from './components/Auth/LoginForm';

class App extends React.Component {
  componentWillUnmount() {
    navigator.geolocation.clearWatch();
  }

  render() {
    switch (true) {
      case true: return (
          <Router>
            <View style={styles.container}>
              <NavMenu dispatch={this.props.dispatch}/>
              <Route exact path="/" component={MapViewer}/>
              <Route path="/group" component={() => (<Group dispatch={this.props.dispatch}/>)}/>
              <Route path="/agenda" component={() => <View><Text>User Schedule Holder</Text></View>}/>
              <Route path="/schedule" component={VenueSchedule}/>
              <Route path="/emergency" component={() => <View><Text>Emergency Info Holder</Text></View>}/>
              <Route path="/choosevenue" component={ChooseVenue}/>
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
    rabble: store.rabble,
    loggedIn: store.auth.loggedIn
  };
})(App);
