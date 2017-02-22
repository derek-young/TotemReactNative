import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { geolocate, updateLocation } from '../components/MapView/geolocation'
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

const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'login_user_success',
    payload: user
  });

};