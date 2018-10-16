import * as ApiUtil from '../util/asset_api_util'
export const RECEIVE_CURRENT_ASSET = 'RECEIVE_CURRENT_ASSET'
export const RECEIVE_CLOSING_PRICE = 'RECEIVE_CLOSING_PRICE'
export const RECEIVE_PORT_ASSETS = 'RECEIVE_PORT_ASSETS'
export const RECEIVE_ASSETS_PRICES = 'RECEIVE_ASSETS_PRICES'


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

export const receivePortfolioAssets = assets => {
  return ({
    type: RECEIVE_PORT_ASSETS,
    assets
  })
}

export const receiveMultiplePrices = assets => {
  return ({
    type: RECEIVE_ASSETS_PRICES,
    assets
  })
}

export const receiveAsset = asset => dispatch => (
  ApiUtil.receiveAsset(asset).then(asset => dispatch(receiveCurrentAsset(asset)))
)

export const receiveClosingPrice = asset => dispatch => (
    ApiUtil.receiveClosingPrice(asset).then(asset => dispatch(receivePrice(asset)))
)

export const receivePortAssets = asset => dispatch => (
  ApiUtil.receivePortAssets(asset).then(asset => dispatch(receivePortfolioAssets(asset)))
)

export const receiveAssetsPrices = assets => dispatch => (
  ApiUtil.receiveAssetsPrices(assets).then(asset => dispatch(receiveMultiplePrices(asset)))
)
