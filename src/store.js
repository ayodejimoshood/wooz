
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const userInfo = JSON.parse(localStorage.getItem("user"))
const initialSate = {userInfo};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialSate,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;