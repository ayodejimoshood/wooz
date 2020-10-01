

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
  if (localStorage.token) {
      setAuthToken(localStorage.token);
  }

  try {  
    let data = localStorage.getItem("user_data")

      dispatch({
          type: USER_LOADED,
          payload: data
      });
  } catch (err) {
      dispatch({
          type: AUTH_ERROR
      });
  }
};


//  LOGIN USER
export const login = (email, password, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/auth/signin',
      { email, password },
      config
    )

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })

    reactLocalStorage.setObject('user_data', data.user)
    console.log(reactLocalStorage.setObject('user_data', data.user))
    history.push('/');
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}

export const registerUser = (firstName, lastName, accountType, email, phone, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/auth/signup',
      { firstName, lastName, accountType, email, phone, password },
      config
    )

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
    
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
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
export const logout = (email, password, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/auth/signout',
      { email, password },
      config
    )

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })

    reactLocalStorage.setObject('user_data', data.user)
    console.log(reactLocalStorage.setObject('user_data', data.user))
    history.push('/');
  } catch (error) {

    return error.response && error.response.data.message
          ? toast.error(error.response.data.message)
          : toast.error(error.message)
  }
}