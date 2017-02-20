export default {
  post: function(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then((response) => {
      return response.json();
      // return response;
    })
    .catch((error) => {
      console.error(error);
    });
  },

  get: function(url) {
    return fetch(url, {
      method: 'GET',
    })
    .then((response) => {
      // return response.json();
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
  }
};
