import React from 'react';
import { AppRegistry, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import App from './app/index';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
export default class Rabble extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  _fbAuth(){
    var context = this;
  	LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
  		if(result.isCancelled) {
  			console.log('Login Cancelled')
  		} else {
  			console.log('Login Successful ' + result.grantedPermissions);
        context.setState({isLoggedIn: true})

  		}
  	}, function(error) {
  		console.log('An error occured: ' + error)
  	})
  }

  render() {
    if(this.state.isLoggedIn === false){
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._fbAuth.bind(this)}>
         <Text>
           Login with Facebook
         </Text>
       </TouchableOpacity>
      </View>
    );
  }
  else {
    return (
      <View style={{flex: 1}}>
       <App />
      </View>
    );
  }
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


