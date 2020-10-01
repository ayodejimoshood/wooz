
import { combineReducers}from 'redux';

import account from './account'
import messages from './messages'



export default combineReducers({
  account,
  messages
});