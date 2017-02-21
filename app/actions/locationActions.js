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
