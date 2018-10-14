import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js'

const portfoliosReducer = (oldState = {}, action) => {

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser.portfolio})
    default:
      return oldState
  }
}

export default portfoliosReducer
