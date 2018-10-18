import { RECEIVE_CURRENT_ASSET, RECEIVE_CLOSING_PRICE, RECEIVE_ALL_ASSETS, RECEIVE_CRYPTO, RECEIVE_NEWS } from '../actions/asset_actions'

export const assetReducer = (oldState = {}, action) => {

  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CURRENT_ASSET:
      return { stock: action.asset }
    case RECEIVE_CLOSING_PRICE:
      return Object.assign({}, oldState, {closing: action.asset[0].close})
    case RECEIVE_ALL_ASSETS:
      return Object.assign({}, oldState, {allAssets: action.assets})
    case RECEIVE_CRYPTO:
      return Object.assign({}, oldState, {cryptos: action.crypto})
    case RECEIVE_NEWS:
      return Object.assign({}, oldState, {news: action.news})
    default:
      return oldState
  }
}

export default assetReducer;
