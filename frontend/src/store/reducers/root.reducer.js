import { combineReducers } from 'redux';
// import { partyReducer } from './party.reducer';
import markReducer from './mark.reducer'

const rootReducer = combineReducers({
  appTitle: () => 'Type Your Name',
  mark: markReducer
});

export default rootReducer;
