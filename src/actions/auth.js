
import axios from 'axios';
import {returnErrors} from './messages'
import {toastr} from 'react-redux-toastr'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS

} from './types'

const base = 'https://scalable-commerce-backend.herokuapp.com/api/v1'


//  CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //  User Loading
  dispatch({ type: USER_LOADING });

  //  Get token from state
  const token = getState().auth.token;

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


  axios.get(`${base}/users/0`, config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status ));
      dispatch({
        type: AUTH_ERROR
      })
    })
}


const toastrOptions = {
  timeOut: 6000, 
  showCloseButton: true, 
}


//  LOGIN USER
export const login = (payload, history) =>  (dispatch) => {
  
  // Headers
  const config = {
    headers : {"Content-Type": "application/json; charset=utf-8"}
  }


  fetch("https://scalable-commerce-backend.herokuapp.com/api/v1/auth/signin", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    credentials: "same-origin"
  }).then(response => response.json())
  .then(data => {
    if (data.message !== 'User updated successfully') {
      toastr.error('invalid username or password', toastrOptions);
      return
    }
    const {email} = payload
    data['email'] = email
    const string = JSON.stringify(data)
    localStorage.setItem("testing", string)
    toastr.success('', `Logged in successfully`, toastrOptions)
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
    history.push("/")
  }).catch(function(error) {
    toastr.error(error.message, toastrOptions)
    console.log(error)

  })

}

export const handleSignInWithSocials = (userObject, social) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify(userObject)
  let baseUrl
  if (social === 'google') {
    baseUrl = `https://scalable-commerce-backend.herokuapp.com/api/v1/oauth/google`
  } else if (social === 'facebook') {
    baseUrl = `https://scalable-commerce-backend.herokuapp.com/api/v1/oauth/instagram`
  }
  try {
    const response = await axios.post(baseUrl, body, config)
    const { status } = response;
    if (status === 200 || status === 201) {
      const { data } = response;
      const { email } = userObject
      data['email'] = email;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      })
      toastr.success('', `Logged in successfully`, toastrOptions)
      return true;
    }   
  } catch (error) {
    console.log(error)
    toastr.error(error.message, toastrOptions)
    return false;
  } 
}

//  REGISTER USER
export const register = ({ firstName,phone,accountType,lastName,email,password }, history) => (dispatch) => {
  
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  const body = JSON.stringify({ firstName,phone,accountType,lastName,email,password });


  axios.post(`${base}/auth/signup`,body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
      history.push('/signin')
      toastr.success('', 'Registration Success', toastrOptions)
    }).catch(err => {
      console.log(err.message)
      toastr.error(err.message)
      dispatch(returnErrors(err.message, 400 ));
      dispatch({
        type: REGISTER_FAIL
      })
    })
}








// LOGOUT


export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
