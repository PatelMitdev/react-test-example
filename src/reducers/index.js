//import { combineReducers } from 'redux';
//const rootReducer = combineReducers({
//  });
//export default rootReducer;

import { combineReducers } from "redux"

import grievances from "./grievancesReducer";

 const rootReducer = combineReducers({
  grievances
});

export default rootReducer;