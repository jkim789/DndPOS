import { combineReducers } from 'redux';
import customersReducer from './customers-reducer';
// import seatsReducer 
// import checksReducer

export default combineReducers({
  customers: customersReducer,
  // seats: seatsReducer,
  // checks: checksReducer,
});
