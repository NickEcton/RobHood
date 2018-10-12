import { RECEIVE_CURRENT_ASSET } from '../actions/asset_actions'

export const assetReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CURRENT_ASSET:
      return { asset: action.asset }
    default:
      return oldState
  }
}

export default assetReducer;
