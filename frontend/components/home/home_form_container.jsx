import React from 'react'
import { connect } from 'react-redux'
import HomeForm from './home_form'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions'
import { receiveAsset, receivePortAssets, receiveAssetsPrices, receiveAllAssets, receiveCrypto, receiveNews } from '../../actions/asset_actions'
import { receivePortfolio, receiveAllSnapshots } from '../../actions/portfolio_actions'

const mapStateToProps = (state) => {

  return ({
    currentUser: state.entities.users[state.session.id],
    asset: state.asset,
    portfolio: state.entities.portfolios[state.session.id],
    assetPrices: state.entities.portfolios.assetPrices,
    allAssets: state.allAssets,
    portAssets: state.entities.portfolios.portfolioAssets
  })
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveAsset: (asset) => dispatch(receiveAsset(asset)),
  receivePortfolio: id => dispatch(receivePortfolio(id)),
  receivePortAssets: id => dispatch(receivePortAssets(id)),
  receiveAssetsPrices: assets => dispatch(receiveAssetsPrices(assets)),
  receiveAllAssets: () => dispatch(receiveAllAssets()),
  receiveCrypto: () => dispatch(receiveCrypto()),
  receiveNews: (symbol) => dispatch(receiveNews(symbol))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeForm))
