import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/index';
import store from './app/store.js';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const Manager = require('react-native').NativeModules;
const BatchedBridge = require('BatchedBridge');

export default class Rabble extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  _fbAuth(){
    console.log(Manager.FBLoginManager);

    var context = this;
      logInWithReadPermissions(['public_profile']).then(function(result){
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



function fn(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
  return new Promise(function(resolve,reject){
    BatchedBridge.enqueueNativeCall(moduleID,methodID,args,
      function(data){return resolve(data);},
      function(errorData){return reject(createErrorFromErrorData(errorData));
    });
  });
}

AppRegistry.registerComponent('Rabble', () => Rabble);
