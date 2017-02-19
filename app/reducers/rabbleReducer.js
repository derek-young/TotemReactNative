const defaults = {
  rabble: [
    { fb_id: '111smi', group_id: '12345', name: 'Smriti', img: 'https://facebook.github.io/react/img/logo_og.png' },
    { fb_id: '222john', group_id: '12345', name: 'John', img: 'https://facebook.github.io/react/img/logo_og.png' },
    { fb_id: '333pat', group_id: '12345', name: 'Pat', img: 'https://facebook.github.io/react/img/logo_og.png' },
    { fb_id: '444der', group_id: '12345', name: 'Derek', img: 'https://facebook.github.io/react/img/logo_og.png' }
  ],
  rabbleLoc: {
    '111smi': { fb_id: '111smi', group_id: '12345', lat: 37.76998, long: -122.49298 },
    '222john': { fb_id: '222john', group_id: '12345', lat: 37.76772, long: -122.49438 },
    '333pat': { fb_id: '333pat', group_id: '12345', lat: 37.76757, long: -122.49427 },
    '444der': { fb_id: '444der', group_id: '12345', lat: 37.76837, long: -122.48994 }
  }
};

export default function appReducer(state = defaults, action) {
  switch(action.type) {
    case 'rabble_sort': {
      const sortedRabble = state.rabble.sort(action.payload.method);
      return {...state, rabble: sortedRabble};
    }
  }
  return state;
};
