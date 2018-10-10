import {signup, login, logout} from '../Util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => {
  type: RECEIVE_CURRENT_USER,
  user
}

export const logoutCurrentUser = () => {
  type: LOGOUT_CURRENT_USER,
}

export const signup = user => dispatch => ({
  signup.then(dispatch(receiveCurrentUser(user)))
})

export const login = user => dispatch => ({
  login.then(dispatch(receiveCurrentUser(user)))
})

export const logout = () => dispatch => ({
  logout.then(dispatch(logoutCurrentUser(user)))
})
