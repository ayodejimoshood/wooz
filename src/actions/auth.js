
import axios from 'axios';
import {returnErrors} from './messages'

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
  }).then( async function(response) {
    
    console.log(response.statusText)
    // console.log(response.statusText())
    console.log(response.status,  response.headers,
      response.url)
      const val = await response.json()
      dispatch({
                type: LOGIN_SUCCESS,
                payload: val
              })
              localStorage.setItem("user", JSON.stringify(val))
    console.log(val)
    history.push("/")
    return response
  }).catch(function(error) {
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
export const register = ({ firstName,phone,accountType,lastName,email,password }) => (dispatch) => {
  
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
      console.log(res.data)
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status ));
      dispatch({
        type: REGISTER_FAIL
      })
    })
}








// LOGOUT

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT_SUCCESS
  })
}
