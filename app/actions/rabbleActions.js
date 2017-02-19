export function sortRabble(method) {
  return {
    type: 'rabble_sort',
    payload: {
      method: method
    }
  }
}

export function getGeofence(lat, long, geoFences) {
  for (let fence of geoFences) {
    const degrees = getDegrees(fence.radius);
    const latDiff = Math.abs(fence.lat - lat);
    const longDiff = Math.abs(fence.long - long);

    if (latDiff < degrees && longDiff < degrees) {
      return fence.name;
    }
  }
  return '';
}

function getDegrees(meters) {
  return meters / 100000;
}
