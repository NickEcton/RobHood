import React from 'react'
import { connect } from 'react-redux'
import { receiveAsset, receiveClosingPrice, receiveAllAssets } from '../../actions/asset_actions'
import { logout } from '../../actions/session_actions'
import { receiveChartOneDay, receiveChartOneMonth, receiveChartThreeMonth, receiveChartOneYear, receiveChartFiveYear } from '../../actions/chart_actions'
import { createOrder } from '../../actions/order_actions'
import AssetForm from './asset_form'


const mapStateToProps = state => ({
  asset: state.asset,
  charts: state.chart,
  portfolio: state.entities.portfolios[state.session.id],
  allAssets: state.asset.allAssets
})

const mapDispatchToProps = dispatch => ({
  receiveAsset: asset => dispatch(receiveAsset(asset)),
  logout: () => dispatch(logout()),
  createOrder: data => dispatch(createOrder(data)),
  receiveClosingPrice: (symbol) => dispatch(receiveClosingPrice(symbol)),
  receiveChartOneDay: (symbol) => dispatch(receiveChartOneDay(symbol)),
  receiveChartOneMonth: (symbol) => dispatch(receiveChartOneMonth(symbol)),
  receiveChartThreeMonth: (symbol) => dispatch(receiveChartThreeMonth(symbol)),
  receiveChartOneYear: (symbol) => dispatch(receiveChartOneYear(symbol)),
  receiveChartFiveYear: (symbol) => dispatch(receiveChartFiveYear(symbol)),
  receiveAllAssets: () => dispatch(receiveAllAssets())
})


export default connect(mapStateToProps,mapDispatchToProps)(AssetForm)
