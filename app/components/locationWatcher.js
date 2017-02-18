var findMe, target, options;

function success(pos) {
  var crd = pos.coords;
  console.log(crd.latitude)
  console.log(crd.longitude)
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

findMe = navigator.geolocation.watchPosition(success, error, options);

export default findMe;