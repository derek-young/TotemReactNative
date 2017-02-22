import updateLocation from '../components/MapView/geolocation';


export function hold(hide) {
  return {
    type: 'updating_location',
    // payload: {
    //   latitude: hide,
    //   longitude:
    // }
  }
}

export function sortGroup(method) {
  return {
    type: 'users_sort',
    payload: {
      method: method
    }
  }
}

export function getGeofence(coordinates, geoFences) {
  for (let fence of geoFences) {
    const degrees = getDegrees(fence.radius);
    const latDiff = Math.abs(fence.latitude - coordinates.latitude);
    const longDiff = Math.abs(fence.longitude - coordinates.longitude);

    if (latDiff < degrees && longDiff < degrees) {
      return fence.name;
    }
  }
  return '';
}

function getDegrees(meters) {
  return meters / 100000;
}
