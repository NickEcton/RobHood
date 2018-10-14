import React from 'react'
import { connect } from 'react-redux'
import HomeForm from './home_form'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions'
import { receiveAsset } from '../../actions/asset_actions'

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    asset: state.asset,
    portfolio: state.entities.portfolios[state.session.id]
  })
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveAsset: (asset) => dispatch(receiveAsset(asset))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeForm))
