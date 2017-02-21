import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './app/store.js';
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class Rabble extends React.Component {
  _fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(results){
      if(isCancelled) {
        console.log('Log in cancelled')
      } else {
        console.log('Login Successful')
      }
    }, function(error){
      console.log('Error signing in', error);
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity onPress={this._fbAuth}>
     <Text>Login with Facebook</Text>
     </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('Rabble', () => Rabble);
   // <Provider store={store}>
   //        <App />
   //      </Provider>
