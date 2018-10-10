import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/session_actions'
import greeting from './greeting'

const mapStateToProps =({ session, entities: { users } }) => ({
  currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(greeting)
