import * as ApiUtil from '../util/portfolio_api_util';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_ALL_SNAPSHOTS = 'RECEIVE_ALL_SNAPSHOTS'

export const receiveCurrentPortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
})

export const receiveSnapshots = snapshots => ({
  type: RECEIVE_ALL_SNAPSHOTS,
  snapshots
})

export const receivePortfolio = (id) => dispatch => (
  ApiUtil.receivePortfolio(id).then((portfolio) => dispatch(receiveCurrentPortfolio(portfolio)))
)

export const receiveAllSnapshots = (id) => dispatch => (
  ApiUtil.receiveAllSnapshots(id).then((snapshots) => dispatch(receiveSnapshots(snapshots)))
)
