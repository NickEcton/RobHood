import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { LineChart, Line } from 'recharts';
import Chart from '../charts/chart.jsx'

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
    this.props.payload.receiveAsset(this.state.asset).then(() =>
    this.props.payload.history.push(`/assets/${this.state.asset}`))
  }

  render() {

      return (
        <main className="asset-show-main market-closed">
        <div className="asset-search-bar">
          <div className="navContainer">
            <div className="asset-search-row">
              <div className="logo-and-search">
              <div className="asset-hood-logo">
                <a href="/#"><img className="robin" src={window.images.logo}/></a>
              </div>
                <div className="asset-search-styling">
                  <div className="asset-search-border">
                    <div className="asset-search-control">
                      <span>
                        <div className="select-placeholder">Search</div>
                        <div className="asset-select-input">
                          <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Search" className="asset-search-input" value={this.state.asset} onChange={this.update()}/>
                          </form>
                        </div>
                      </span>
                    </div></div>
                    <svg className="asset-search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="search" transform="translate(-11.000000, -11.000000)"><path d="M23.0733726,24.4447312 C21.8075531,25.4199921 20.2215106,26 18.5,26 C14.3578644,26 11,22.6421356 11,18.5 C11,14.3578644 14.3578644,11 18.5,11 C22.6421356,11 26,14.3578644 26,18.5 C26,20.2215106 25.4199921,21.8075531 24.4447312,23.0733726 L28.1425948,26.7712362 L26.7712362,28.1425948 L23.0733726,24.4447312 Z M18.5,24 C21.5375661,24 24,21.5375661 24,18.5 C24,15.4624339 21.5375661,13 18.5,13 C15.4624339,13 13,15.4624339 13,18.5 C13,21.5375661 15.4624339,24 18.5,24 Z" id="Combined-Shape"></path></g></svg>
                </div>
              </div>
              <div className="navLinks">
                <div className="navLinkContainer">
                  <div className="homeLink">Home</div>
                  <div className="notifications">Notifications</div>
                  <Link to="/"><button onClick={this.props.payload.logout}>Logout!</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div>
            <div className="c2W3-2ndhighcont">
              <div className="cont-without-nav">
                <div className="before-main-container">
                  <div className="main-container">
                    <div className="head-row">
                      <div className="graph-cont">
                        <div className="qwe">
                          <section className="graph-begin">
                            <header className="graph-header">
                              <h1 className="graph-asset-price">
                              Portfolio Value
                              </h1>
                              <div className="today-movement">
                              50%
                              </div>
                              <div className="after-hours">
                              -15%
                              </div>
                            </header>
                            <div className="graph">< Chart data={this.state.data}/></div>
                            <nav className="graph-buttons">
                            <button value="oneDay"onClick={this.switch}>1D</button>
                            <button value="oneMonth"onClick={this.switch}>1M</button>
                            <button value="threeMonth"onClick={this.switch}>3M</button>
                            <button value="oneYear"onClick={this.switch}>1Y</button>
                            <button value="fiveYear"onClick={this.switch}>5Y</button>
                            </nav></section>
                        </div>
                      </div>
                      <div className="order-cont">
                        <div className="sidebar-content">
                          <form className="take-order">
                            <header className="order-header">
                              <div className="order-head-cont">
                              <span>{this.props.payload.portfolio.id}</span>
                              </div></header>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )
    }
}

export default withRouter(userHome)
