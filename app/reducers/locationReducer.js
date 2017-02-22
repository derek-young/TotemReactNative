const defaults = {
  api_url: 'http://localhost:8000',
  userFbId: '444der',
  users: {},
  geoFences: [
    { name: 'Lands End Stage', type: 'venue', lat: 37.76766, long: -122.49479, radius: 50 },
    { name: 'Sutro Stage', type: 'venue', lat: 37.76992, long: -122.49341, radius: 50 },
    { name: 'Panhandle Stage', type: 'venue', lat: 37.76984, long: -122.48619, radius: 30 },
    { name: 'Twin Peaks Stage', type: 'venue', lat: 37.76974, long: -122.48303, radius: 30 },
    { name: 'Basecamp', type: 'group', lat: 37.7683, long: -122.49002, radius: 10 }
  ]
};

export default function locationReducer(state = defaults, action) {
  switch(action.type) {
    case 'updating_location': {
      return {...state, users: action.payload};
    }
  }
  return state;
};
