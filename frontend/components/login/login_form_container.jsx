import React from 'react'
import { login, clearErrors } from '../../actions/session_actions'
import LoginForm from './login_form'
import { connect } from 'react-redux'

const mapStateToProps = ( {errors} ) => ({
  formType: 'Sign In',
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  processform: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
