import React from 'react'
import { Link } from 'react-router-dom'

class aboutHome extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
  return (
    <div className="about-home-page">
      <div className="nav-bar-prep">
        <div className="container">
          <div className="navbar-header">
            <a href="/#"><img className="about-robin" src={window.images.logo}/></a>
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-right">
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Help</a></li>
            <li><Link to= "/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="content">
        <section id="hero" className="step-trigger-wrapper container scrolled">
          <div className="container">
            <div className="row">
            <div className="half-the-div">
              <div className="copy">
                <h1>
                  <div className="first">Investing.</div>
                  <div className="second">Now for Rob.</div>
                </h1>
                <h4 className="third"> Robinhood lets you learn to invest in the stock market for free.</h4>
                <Link to="/signup" className="SignInBtn">Sign Up</Link>
              </div>
            </div>
            <div className="half-the-div">
            <video id ="vid-investing-for-rob" loop autoPlay muted className="phone">
              <source className="active" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/iPhone_header.webm"/>
            </video>
            </div>
            </div>
          </div>
        </section>
      </div>
      <div id="footer"></div>
    </div>
  )
}
}

export default aboutHome
