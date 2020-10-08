
import { combineReducers}from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'


import auth from './auth'
import messages from './messages'



export default combineReducers({
  auth,
  messages,
  toastr: toastrReducer
});