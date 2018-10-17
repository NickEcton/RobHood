import { RECEIVE_CURRENT_ASSET, RECEIVE_CLOSING_PRICE, RECEIVE_ALL_ASSETS } from '../actions/asset_actions'

export const assetReducer = (oldState = {}, action) => {

  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CURRENT_ASSET:
      return { stock: action.asset }
    case RECEIVE_CLOSING_PRICE:
      return Object.assign({}, oldState, {closing: action.asset[0].close})
    case RECEIVE_ALL_ASSETS:
      return Object.assign({}, oldState, {allAssets: action.assets})
    default:
      return oldState
  }
}

export default assetReducer;
