import * as ApiUtil from '../util/asset_api_util'
export const RECEIVE_CURRENT_ASSET = 'RECEIVE_CURRENT_ASSET'

export const receiveCurrentAsset = asset => {

  return ({
    type: RECEIVE_CURRENT_ASSET,
    asset
})
}

export const receiveAsset = asset => dispatch => (
  ApiUtil.receiveAsset(asset).then(asset => dispatch(receiveCurrentAsset(asset)))
)
