import { combineReducers } from 'redux';
import songReducer from '../features/songs/slice';

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;