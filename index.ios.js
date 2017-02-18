import React from 'react';
import { AppRegistry, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import App from './app/index';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
export default class Rabble extends React.Component {

  _fbAuth(){
  	LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
  		if(result.isCancelled) {
  			console.log('Login Cancelled')
  		} else {
  			console.log('Login Successful ' + result.grantedPermissions);
  		}
  	}, function(error) {
  		console.log('An error occured: ' + error)
  	})
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._fbAuth}>
         <Text>
           Login with Facebook
         </Text>
       </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('Rabble', () => Rabble);
 //<App />