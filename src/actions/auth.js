
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
  timeOut: 5000, 
  showCloseButton: true, 
}


//  LOGIN USER
export const login = (payload, history) =>  (dispatch) => {
  
  // Headers
  const config = {
    headers : {"Content-Type": "application/json; charset=utf-8"}
  }


  // axios.post('https://scalable-commerce-backend.herokuapp.com/api/v1/auth/signin',  { email,password },{ 
  //   headers : {"Content-Type": "application/json; charset=utf-8"}
  //  }.then(response => {
  //      console.log(response);
  //  }).catch(error => {
  //      console.log(error);
  //  })
  // )

  // Request body
  // const body = { email,password }
  fetch("https://scalable-commerce-backend.herokuapp.com/api/v1/auth/signin", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    credentials: "same-origin"
  }).then(response => response.json())
  .then(data => {
    const string = JSON.stringify(data)
    localStorage.setItem("test", 'name')
    localStorage.setItem("testing", string)
    toastr.success('Login Success', '', toastrOptions)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
    history.push("/")
  }).catch(function(error) {
    toastr.error(error.message)
    console.log(error.message)

  })
 
  
  
  
  
  
// try {
//   const {data} = await axios.post(`https://scalable-commerce-backend.herokuapp.com/api/v1/auth/signin`,{ email,password }, config)
//   console.log(data)
//   dispatch({
//     type: LOGIN_SUCCESS,
//     payload: data
//   })
// } catch (error) {
//   console.log(error.response.data)
// }


// console.log(body)
//   axios.post(`${base}/auth/signin`,body)
//     .then(res => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       })
//     }).catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status ));
//       dispatch({
//         type: LOGIN_FAIL
//       })
//     })

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
      toastr.success('Registration Success', '', toastrOptions)
    }).catch(err => {
      console.log(err)
      toastr.error(err.message)
      dispatch(returnErrors(err.message, 400 ));
      dispatch({
        type: REGISTER_FAIL
      })
    })
}








// LOGOUT

export const logout = () => (dispatch) => {
  console.log('here')
  dispatch({
    type: LOGOUT_SUCCESS
  })
}


export const logOut = () => {
  
  return {
    type: LOGOUT_SUCCESS
  }
}
