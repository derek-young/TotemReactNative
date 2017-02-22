const defaults = {
  api_url: 'http://localhost:8000',
  userFbId: '',
  venueId: '',
  groupId: ''
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'update_fbId': {
      return { ...state, userFbId: action.payload.id };
    }
  }
  return state;
};
