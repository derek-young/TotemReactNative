export function sortGroup(method) {
  return {
    type: 'group_sort',
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
