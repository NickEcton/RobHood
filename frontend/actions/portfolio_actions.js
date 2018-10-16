import * as ApiUtil from '../util/portfolio_api_util';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';

export const receiveCurrentPortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
})

export const receivePortfolio = (id) => dispatch => (
  ApiUtil.receivePortfolio(id).then((portfolio) => dispatch(receiveCurrentPortfolio(portfolio)))
)
