import { CREATE_ORDER } from '../actions/order_actions.js'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const ordersReducer = (oldState = {}, action) => {

Object.freeze(oldState)
  switch(action.type) {
    case CREATE_ORDER:
      return Object.assign({}, oldState, {[action.user_id]: action.order})
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser.portfolio.orders})
    default:
      return oldState
  }
}

export default ordersReducer
