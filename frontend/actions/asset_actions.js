import * as ApiUtil from '../util/asset_api_util'
export const RECEIVE_CURRENT_ASSET = 'RECEIVE_CURRENT_ASSET'
export const RECEIVE_CLOSING_PRICE = 'RECEIVE_CLOSING_PRICE'


export const receiveCurrentAsset = asset => {
  return ({
    type: RECEIVE_CURRENT_ASSET,
    asset
  })
}

export const receivePrice = asset => {
  return ({
    type: RECEIVE_CLOSING_PRICE,
    asset
  })
}


export const receiveAsset = asset => dispatch => (
  ApiUtil.receiveAsset(asset).then(asset => dispatch(receiveCurrentAsset(asset)))
)

export const receiveClosingPrice = asset => dispatch => (
    ApiUtil.receiveClosingPrice(asset).then(asset => dispatch(receivePrice(asset)))
)
