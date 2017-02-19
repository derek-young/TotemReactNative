import { combineReducers } from "redux";
import app from './appReducer';
import nav from './navReducer';
import rabble from './rabbleReducer';

export default combineReducers({
  app,
  nav,
  rabble
});
