const defaults = {
  users: [
    { fb_id: '111smi', group_id: '12345', name: 'Smriti', img: 'https://facebook.github.io/react/img/logo_og.png',
      coordinates: { latitude: 37.76998, longitude: -122.49298 }
    },
    { fb_id: '222john', group_id: '12345', name: 'John', img: 'https://facebook.github.io/react/img/logo_og.png',
      coordinates: { latitude: 37.76772, longitude: -122.49438 }
    },
    { fb_id: '333pat', group_id: '12345', name: 'Pat', img: 'https://facebook.github.io/react/img/logo_og.png',
      coordinates: { latitude: 37.76757, longitude: -122.49427 }
    },
    { fb_id: '444der', group_id: '12345', name: 'Derek', img: 'https://facebook.github.io/react/img/logo_og.png',
      coordinates: { latitude: 37.76837, longitude: -122.48994 }
    }
  ],
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
      const sortedUsers = state.users.sort(action.payload.method);
      return {...state, users: sortedUsers};
    }
  }
  return state;
};
