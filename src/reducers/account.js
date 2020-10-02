
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_USER_SUCCESS,
  VERIFY_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  USER_EMAIL_SUCCESS,
  USER_IMAGE_BASE_URL_SUCCESS,
  USER_IMAGE_SUCCESS,
  CHANGE_USER_PASSWORD_SUCCESS,
  GET_USERS
} from '../actions/types'

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: true,
  user:null,
};

export default function(state = initialState,action){
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true 
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user_data: null,
        user: null,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: [action.payload],
        isLoading: false
      };
      case VERIFY_SUCCESS:
      case RESET_PASSWORD_SUCCESS:
      case USER_IMAGE_SUCCESS:
      case USER_IMAGE_BASE_URL_SUCCESS:
      case USER_EMAIL_SUCCESS:
      case CHANGE_USER_PASSWORD_SUCCESS: 
        return {
          ...state,
          isLoading: false
        };
    default:
      return state;
  }
}