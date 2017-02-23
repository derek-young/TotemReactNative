const users = require('./mock_user_data');

const defaults = {
  users,
  geoFences: [
    { name: 'Lands End Stage', type: 'venue', latitude: 37.76766, longitude: -122.49479, radius: 50 },
    { name: 'Sutro Stage', type: 'venue', latitude: 37.76992, longitude: -122.49341, radius: 50 },
    { name: 'Panhandle Stage', type: 'venue', latitude: 37.76984, longitude: -122.48619, radius: 30 },
    { name: 'Twin Peaks Stage', type: 'venue', latitude: 37.76974, longitude: -122.48303, radius: 30 },
    { name: 'Basecamp', type: 'group', latitude: 37.7683, longitude: -122.49002, radius: 10 }
  ]
};

export default function locationReducer(state = defaults, action) {
  switch(action.type) {
    case 'updating_location': {
      return {...state, users: action.payload};
    }
    case 'users_sort': {
      const users = objToArray(state.users);
      const sortedUsers = users.sort(action.payload.method);
      return {...state, users: sortedUsers};
    }
  }
  return state;
};

function objToArray(obj) {
  const result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
}
