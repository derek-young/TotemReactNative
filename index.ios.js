import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './app/store.js';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';

export default class Rabble extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }
  _fbAuth(){
    var context = this;
<<<<<<< HEAD
    LoginManager.logInWithReadPermissions(['public_profile', 'user_friends']).then(function(results){
      context.setState({isLoggedIn: true})
      if(results.isCancelled) {
=======
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
        context.setState({isLoggedIn: true})
      if(result.isCancelled) {
>>>>>>> 7941342fd35073507179b39eac523df6f116f064
        console.log('Log in cancelled')
      } else {
        console.log('Login Successful')
      }
    }, function(error){
      console.log('Error signing in', error);
    })
  }

  render() {
    if(this.state.isLoggedIn === false) {
    return (
      <View style={{ flex: 1 }}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity onPress={this._fbAuth.bind(this)}>
     <Text>Login with Facebook</Text>
     </TouchableOpacity>
      </View>
    );
  }
  else {
    return(
    <View style={{ flex: 1 }}>
      <Provider store={store}>
      <App />
      </Provider>
    </View>
    )
  }
  }
}

AppRegistry.registerComponent('Rabble', () => Rabble);
