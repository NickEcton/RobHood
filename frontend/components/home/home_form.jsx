import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import UserHome from './user_home'
import AboutHome from './about_home'


class HomeForm extends React.Component {

  constructor(props) {
    super(props)
    console.log(props.currentUser)
    this.props = props
  }


  render() {
    let example



    if (this.props.currentUser) {
      example =<UserHome payload={this.props}/>
    } else {
      example =  <AboutHome />
    }

    return (
      <div className="home-container">
        {example}
      </div>
    )
  }
}


export default withRouter(HomeForm)
