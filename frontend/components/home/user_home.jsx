import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'

class userHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { asset: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.payload.asset != undefined) {
  //     this.props.payload.history.push('hell')
  //   }
  // }

  update() {
    return e => this.setState({
      asset: e.currentTarget.value
    })
  }



  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    this.props.payload.receiveAsset(this.state.asset)
    debugger
    this.props.payload.history.push(`/assets/${this.state.asset}`)
  }

  render() {
    return (
    <div>
      <div className="searchBar">
        <div className="navContainer">
          <div className="searchRow">
          <div className="hoodLogo">
            <a href="/#"><img className="robin" src={window.images.logo}/></a>
          </div>
            <div className="LogoandSearch">
              <div className="searchStyling">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search" className="searchInput" value={this.state.asset} onChange={this.update()}/>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className="navLinks">
              <div className="navLinkContainer">
                <div className="homeLink">Home</div>
                <div className="notifications">Notifications</div>
                <button onClick={this.props.payload.logout}>Logout!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(userHome)
