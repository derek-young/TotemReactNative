import firebase from "firebase";

export function geolocate() {
  function success(pos) {
    const user = firebase.auth().currentUser
      firebase.database().ref(`users/${user.uid}/coordinates`).set({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
      console.log('user', user)
      console.log('lat', pos.coords.latitude)
      console.log('long', pos.coords.longitude)
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000
  };

  navigator.geolocation.watchPosition(success, error, options);
}


export function updateLocation() {
  const user = firebase.auth().currentUser
  return (dispatch) => {
    firebase.database().ref().child('users')
      .on('value', snapshot => {
        dispatch({ type: 'updating_location', payload: snapshot.val() });
      });
  };
};
