import React from 'react'
import { connect } from 'react-redux'
import { receiveAsset, receiveClosingPrice } from '../../actions/asset_actions'
import { logout } from '../../actions/session_actions'
import { receiveChartOneDay, receiveChartOneMonth, receiveChartThreeMonth, receiveChartOneYear, receiveChartFiveYear } from '../../actions/chart_actions'
import AssetForm from './asset_form'
const mapStateToProps = state => ({
  asset: state.asset,
  charts: state.chart
})

const mapDispatchToProps = dispatch => ({
  receiveAsset: asset => dispatch(receiveAsset(asset)),
  logout: () => dispatch(logout()),
  receiveClosingPrice: (symbol) => dispatch(receiveClosingPrice(symbol)),
  receiveChartOneDay: (symbol) => dispatch(receiveChartOneDay(symbol)),
  receiveChartOneMonth: (symbol) => dispatch(receiveChartOneMonth(symbol)),
  receiveChartThreeMonth: (symbol) => dispatch(receiveChartThreeMonth(symbol)),
  receiveChartOneYear: (symbol) => dispatch(receiveChartOneYear(symbol)),
  receiveChartFiveYear: (symbol) => dispatch(receiveChartFiveYear(symbol)),
})


export default connect(mapStateToProps,mapDispatchToProps)(AssetForm)
