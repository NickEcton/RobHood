import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js'
import { CREATE_ORDER } from '../actions/order_actions.js'
import { RECEIVE_PORTFOLIO} from '../actions/portfolio_actions'
import { RECEIVE_PORT_ASSETS, RECEIVE_ASSETS_PRICES } from '../actions/asset_actions'
const portfoliosReducer = (oldState = {}, action) => {

  Object.freeze(oldState)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser.portfolio})
    case CREATE_ORDER:
      return Object.assign({}, oldState, {[action.order.user_id]: (action.order)})
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, oldState, {[action.portfolio.user_id]: (action.portfolio)})
    case RECEIVE_PORT_ASSETS:
      return Object.assign({}, oldState, {portfolioAssets: action.assets})
    case RECEIVE_ASSETS_PRICES:
      return Object.assign({}, oldState, {assetPrices : action.assets})
    default:
      return oldState
  }
}

export default portfoliosReducer
