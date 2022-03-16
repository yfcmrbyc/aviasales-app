import { combineReducers } from 'redux';
import filters from './filters';
import sorting from './sorting';
import app from './app';

export default combineReducers({
  filters,
  sorting,
  app,
});
