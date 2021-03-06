import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { geolocate, getGroupLoc, updatedUsers } from '../actions/locationActions';
import store from '../store.js'
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
    .then(geolocate)
    .then(getGroupLoc)
    .then((users) => dispatch(updateUsers(users)))
    .catch((error) => {
      console.log(error);
    });
  };
};

export const fbAuth = () => {
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
          const responseInfoCallback = (error, res) => {
            if(error) {
              console.log('Error fetching data :', error.toString())
            } else {
              console.log('Success fetching data : ', res)
              let fbID = res.id;
              let picture = res.picture.data.url;
              console.log('fbID', res.picture.data.url)
              //CHECK
              store.dispatch({type: 'picture_received', payload: picture})
              store.dispatch({type: 'login_user_success'})

              let credential = firebase.auth.FacebookAuthProvider.credential(accessToken)

              return(dispatch) => {
               firebase.auth().signInWithEmailAndPassword(email, password)
              .then(user => loginUserSuccess(dispatch, user))
              .then(geolocate)
              .then(getGroupLoc)
              .then((users) => dispatch(updateUsers(users)))
              .catch((error) => {
                console.log(error);
              });
            }
          }
        }
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'id,picture'
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

// export const getFriends


const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'login_user_success',
    payload: user
  });

};
