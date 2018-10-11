import React from 'react'
import { connect } from 'react-redux'
import HomeForm from './home_form'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  test: 'test'
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm)
