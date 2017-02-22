import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { geolocate, updateLocation } from '../components/MapView/geolocation'
import FBSDK, { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'login_user' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .then(() => geolocate())
      .then(

      firebase.database().ref().child('users')
        .on('value', snapshot => { //console.log(snapshot.val())
           dispatch({ type: 'updating_location', payload: snapshot.val() });
        }))


      .catch((error) => {
        console.log(error);

        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .then(user => loginUserSuccess(dispatch, user))
        //   .catch(() => loginUserFail(dispatch));
      });
  };
};

export const fbAuth = (dispatch) => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
        //context.setState({isLoggedIn: true})
        //refactor to redux
      if(result.isCancelled) {
        console.log('Log in cancelled')
      } else {
        console.log('Login Successful')
        AccessToken.getCurrentAccessToken().then(
        (data) => {
          let accessToken = data.accessToken
          //console.log('TOKEN', accessToken.toString())

          const responseInfoCallback = (error, result) => {
            if(error) {
              console.log('Error fetching data :', error.toString())
            } else {
              console.log('Success fetching data : ', result)
              let fbID = result.id;
              console.log('fbID', fbID)
              //CHECK
              dispatch({type: 'login_user_success'})
              let credential = firebase.auth.FacebookAuthProvider.credential(accessToken)
              firebase.auth().signInWithCredentials(credential)
                .then(user => loginUserSuccess(dispatch, user))
            //     .then(() => geolocate())
            //     .then(

            //     firebase.database().ref().child('users')
            //       .on('value', snapshot => { //console.log(snapshot.val())
            //          dispatch({ type: 'updating_location', payload: snapshot.val() });
            //       }))


            //     .catch((error) => {
            //       console.log(error);
            // })
            }
          }

          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'id'
                }
              }
            },
            responseInfoCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start()  
        })
      }
    }, function(error){
      console.log('Error signing in', error);
  })
}

const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'login_user_success',
    payload: user
  });

};