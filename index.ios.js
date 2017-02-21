import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './app/store.js';
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class Rabble extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  _fbAuth(){
    var context = this;
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
        context.setState({isLoggedIn: true})
      if(result.isCancelled) {
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
