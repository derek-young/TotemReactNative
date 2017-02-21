import { combineReducers } from "redux";
import app from './appReducer';
import nav from './navReducer';
import rabble from './rabbleReducer';
import auth from './authenticationReducer';

export default combineReducers({
  app,
  nav,
  rabble,
  auth
});
