import React from 'react';
import { LineChart, Line } from 'recharts';
import Chart from '../charts/chart.jsx'

class AssetForm extends React.Component {
  constructor(props) {

    super(props)
    this.state = { asset: "", data: [10]}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switch = this.switch.bind(this)
  }

  componentDidMount() {
    this.props.receiveClosingPrice(this.props.asset.stock.symbol)
    this.props.receiveChartOneDay(this.props.asset.stock.symbol)
    this.props.receiveChartOneMonth(this.props.asset.stock.symbol)
    this.props.receiveChartThreeMonth(this.props.asset.stock.symbol)
    this.props.receiveChartOneYear(this.props.asset.stock.symbol)
    this.props.receiveChartFiveYear(this.props.asset.stock.symbol)
  }
  componentDidUpdate(prevProps) {
  if (this.props.asset.stock.symbol !== prevProps.asset.stock.symbol) {
    this.props.receiveClosingPrice(this.props.asset.stock.symbol);
    this.props.receiveChartOneDay(this.props.asset.stock.symbol);
    this.props.receiveChartOneMonth(this.props.asset.stock.symbol)
    this.props.receiveChartThreeMonth(this.props.asset.stock.symbol)
    this.props.receiveChartOneYear(this.props.asset.stock.symbol)
    this.props.receiveChartFiveYear(this.props.asset.stock.symbol)
  }
}

  switch(e) {
    if (e.target.value === "oneDay") {
      this.setState({ data: this.props.charts.oneDay})
    } else if (e.target.value === "oneMonth") {
      this.setState({ data: this.props.charts.oneMonth})
    } else if (e.target.value === "threeMonth") {
      this.setState( { data: this.props.charts.threeMonth})
    } else if (e.target.value === "oneYear") {
      this.setState( { data: this.props.charts.oneYear})
    } else if (e.target.value === "fiveYear") {
      this.setState( { data: this.props.charts.fiveYear})
    }
  }


  update() {
    return e => this.setState({
      asset: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    this.props.receiveAsset(this.state.asset).then(() =>
    this.props.history.push(`/assets/${this.state.asset}`))
  }

  render() {

    return (
      <main className="asset-show-main market-closed">
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
                <button onClick={this.props.logout}>Logout!</button>
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
                  <div className="tag-line">
                    {this.props.asset.stock.tags.map(function(tag, index){
                      return <div className="tags" key={index}><a className="tag-link">{tag}</a></div>;
                    })}
                  </div>
                  <div className="head-row">
                    <div className="graph-cont">
                      <header className="asset-header">
                        <h1>{this.props.asset.stock.companyName}</h1>
                      </header>
                      <div className="qwe">
                        <section className="graph-begin">
                          <header className="graph-header">
                            <h1 className="graph-asset-price">
                            {this.props.asset.closing}
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
                        <section className="about">
                          <header className="about-header">
                            <div className="about-border">
                            <h2>About</h2>
                            <a className="show-more" href="#">Show More</a>
                            </div></header>
                          <div className="about-description-cont">
                          <h3 className="about-description">
                          {this.props.asset.stock.description + " "}
                          <span><a> Read More</a></span>
                          </h3>
                          </div>
                          <div className="about-grid">
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Symbol
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.symbol}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Company
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.companyName}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            CEO
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.CEO}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Industry
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.industry}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Sector
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.sector}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Exchange
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.exchange}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            IssueType
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.issueType}
                            </div>
                            </div>
                          </div></section>
                        <section className="collections">
                          <header className="collections-header">
                            <div className="collections-header-title">
                              <h2>Collections</h2>
                            </div>
                          </header>
                            <div className="collections-item-cont">
                            {this.props.asset.stock.tags.map(function(tag, index){
                              return <div className="collections-item" key={index}><a className="tag-link">{tag}</a></div>;
                            })}
                            </div>
                        </section>
                      </div>
                    </div>
                    <div className="order-cont">
                      <div className="sidebar-content">
                        <form className="take-order">
                          <header className="order-header">
                            <div className="order-head-cont">
                            <span>Buy {this.props.asset.stock.symbol}</span>
                            </div></header>
                          <div>
                            <div className="order-asset-detail">
                              <div className="order-shares-detail">
                                <label>
                                  <div>Shares</div>
                                  <div><input min="0" placeholder="0" type="number" value=""/></div>
                                </label>
                              </div>
                            </div>
                          </div>
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

export default AssetForm
