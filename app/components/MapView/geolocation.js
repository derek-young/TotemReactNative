import firebase from "firebase";

export default function geolocation() {
  function success(pos) {
    var user = firebase.auth().currentUser
    
      firebase.database().ref(`users/${user.uid}/coordinates`).set({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  navigator.geolocation.watchPosition(success, error, options);
}