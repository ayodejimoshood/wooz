

// import axios from 'axios';
import axios from '../config/axios'
import {returnErrors} from './messages'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_USER_SUCCESS,
  VERIFY_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  USER_IMAGE_SUCCESS,
  USER_IMAGE_BASE_URL_SUCCESS,
  USER_EMAIL_SUCCESS,
  CHANGE_USER_PASSWORD_SUCCESS,
  GET_USERS
} from './types'
import { toast } from 'react-toastify';
import { reactLocalStorage } from 'reactjs-localstorage';
import setAuthToken from '../config/setAuthToken'

// GET Account
const scalableBaseUrl = 'https://scalable-commerce-backend.herokuapp.com'


// Load Current User
export const loadUser = () => async dispatch => {
  
  axios.get('/auth/v1/users/0')
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    }).catch(error => {
      return error.response && error.response.data.message
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    })
};



//  LOGIN USER
export const login = (email,password) => (dispatch) => {
  
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  const body = JSON.stringify({ email,password });


  axios.post('/auth/v1/signin',body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    }).catch(error => {
      return error.response && error.response.data.message
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    })
}






export const registerUser = (firstName, lastName, accountType, email, phone, password) =>  (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ firstName, lastName, accountType, email, phone, password })

    axios.post(
      '/auth/v1/signup',
      body,
      config
    )
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    }).catch(error => {
      return error.response && error.response.data.message
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    })
}





export const updateUser = (firstName, lastName, gender, dob, attributes) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/users',
      { firstName, lastName, gender, dob, attributes },
      config
    )

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}

export const verifyUser = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/auth/verify',
      { email },
      config
    )

    dispatch({
      type: VERIFY_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}


export const emailActivator = (verificationCode) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/auth/email-activate',
      { verificationCode },
      config
    )

    dispatch({
      type: VERIFY_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}


export const resetPassword = (verificationCode, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/auth/reset-password',
      { verificationCode, password },
      config
    )

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}



export const updateUserImage = (image) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/userImage',
      { image },
      config
    )

    dispatch({
      type: USER_IMAGE_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}


export const updateUserImageBaseUrl = (fileSize, mimeType, base64String) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/userImage',
      { fileSize, mimeType, base64String },
      config
    )
    
    dispatch({
      type: USER_IMAGE_BASE_URL_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}



export const updateUserEmail = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/userEmail',
      { email },
      config
    )
    
    dispatch({
      type: USER_EMAIL_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}


export const changeUserPassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.put(
      '/userPassword',
      { oldPassword, newPassword },
      config
    )
    
    dispatch({
      type: CHANGE_USER_PASSWORD_SUCCESS,
      payload: data,
    })
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}


export const getUsers = () => dispatch => {
  axios
      .get('/users')
      .then(res =>
          dispatch({
              type: GET_USERS,
              payload: res.data
          })
      )
      .catch(error => {

          return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
        }
      );
};

// LOGOUT

export const logout = () => (dispatch, getState) => {
  
  //  Get token from state
  const token = getState().account.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers config
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }


  axios.post('/auth/signout')
    .then(res => {
      dispatch({
        type:LOGOUT_SUCCESS,
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status ));
    })
}