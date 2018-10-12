import React from 'react'
import { Link } from 'react-router-dom'

function aboutHome(props) {
  return (
    <div>
      <h1>Prepping Alternative Home-Page</h1>
      <Link to ="login">Click Here to Log In</Link>
      <br/>
      <Link to ="Signup">Click here to Sign Up!</Link>
    </div>
  )
}

export default aboutHome
