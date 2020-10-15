
import {
  USER_LOADED,
  USER_LOADING,
  UPDATE_USER_INFO,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_NAME
} from '../actions/types'

const initialState = {
  token: null,
  isAuthenticated:null,
  isLoading:false,
  user: {}
};

export default function(state = initialState,action){
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading:true 
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading:false,
        isAuthenticated:true,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated:true,
        isLoading:false,
        token: action.payload.user.accessToken
      }
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading:false,
        isAuthenticated:false,
        token:null,
        user: {},
      }
    case UPDATE_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          firstname: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email
        }
      }
    case UPDATE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        }
      }
    default:
      return state;
  }
}