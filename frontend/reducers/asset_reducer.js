import { RECEIVE_CURRENT_ASSET, RECEIVE_CLOSING_PRICE } from '../actions/asset_actions'

export const assetReducer = (oldState = {}, action) => {
  
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CURRENT_ASSET:
      return { stock: action.asset }
    case RECEIVE_CLOSING_PRICE:
      return Object.assign({}, oldState, {closing: action.asset[0].close})
    default:
      return oldState
  }
}

export default assetReducer;
