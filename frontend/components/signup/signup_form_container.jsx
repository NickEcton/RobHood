import React from 'react'
import { signup, clearErrors } from '../../actions/session_actions'
import { connect } from 'react-redux'
import SignupForm from './signup_form'
const mapStateToProps = ( {errors} ) => ({
  formType: 'signup',
  errors: errors.session
});

const mapDispatchToProps = (dispatch) => ({
  processform: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
