import { combineReducers } from 'redux';
import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  resource: resourceReducer
});

export default rootReducer;
