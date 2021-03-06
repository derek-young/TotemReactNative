const defaults = {
  email: '',
  password: '',
  error: '',
  loading: false,
  loggedIn: false,
  picture: null,
};

export default (state = defaults, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.payload };
    case 'password_changed':
      return { ...state, password: action.payload };
    case 'picture_received' :
      return { ...state, picture: action.payload };
    case 'login_user':
      return { ...state, loading: true, error: '' };
    case 'login_user_success':
      return { ...state, ...defaults, user: action.payload, loggedIn: true };
    case 'login_user_fail':
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
}
