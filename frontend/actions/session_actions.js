import * as ApiUtil from '../Util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (arr) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: arr
});

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))
)

export const login = user => dispatch => {
  return ApiUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
})}

export const logout = () => dispatch => (
  ApiUtil.logout().then(user => dispatch(logoutCurrentUser()))
)
