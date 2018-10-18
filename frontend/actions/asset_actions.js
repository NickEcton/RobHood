import * as ApiUtil from '../util/asset_api_util'
export const RECEIVE_CURRENT_ASSET = 'RECEIVE_CURRENT_ASSET'
export const RECEIVE_CLOSING_PRICE = 'RECEIVE_CLOSING_PRICE'
export const RECEIVE_PORT_ASSETS = 'RECEIVE_PORT_ASSETS'
export const RECEIVE_ASSETS_PRICES = 'RECEIVE_ASSETS_PRICES'
export const RECEIVE_ALL_ASSETS = 'RECEIVE_ALL_ASSETS'
export const RECEIVE_CRYPTO = 'RECEIVE_CRYPTO'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'

export const receiveCurrentAsset = asset => {
  return ({
    type: RECEIVE_CURRENT_ASSET,
    asset
  })
}

export const receiveEveryAsset = assets => {
  return ({
    type: RECEIVE_ALL_ASSETS,
    assets
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

export const receiveAllCrypto = crypto => {
  return ({
    type: RECEIVE_CRYPTO,
    crypto
  })
}

export const receiveAllNews = news => {
  return ({
    type: RECEIVE_NEWS,
    news
  })
}

export const receiveNews = (symbol) => dispatch => (
  ApiUtil.receiveNews(symbol).then(news => dispatch(receiveAllNews(news)))
)

export const receiveCrypto = () => dispatch => (
  ApiUtil.receiveCrypto().then(crypto =>
  dispatch(receiveAllCrypto(crypto)))
)

export const receiveAsset = asset => dispatch => (
  ApiUtil.receiveAsset(asset).then(asset => dispatch(receiveCurrentAsset(asset)))
)

export const receiveAllAssets = () => dispatch => (
  ApiUtil.receiveAllAssets().then(assets => dispatch(receiveEveryAsset(assets)))
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
