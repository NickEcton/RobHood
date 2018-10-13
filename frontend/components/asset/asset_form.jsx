import React from 'react';
import { LineChart, Line } from 'recharts';
import Chart from '../charts/chart.jsx'

class AssetForm extends React.Component {
  constructor(props) {

    super(props)
    this.state = { asset: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.receiveChartFiveMonth(this.props.asset.stock.symbol)
  }
}

  switch(e) {
    console.log('happening')

    let graphs = [...document.querySelectorAll(".graph")];
    for (var i=0; i < graphs.length; i++) {
      if (graphs[i].classList.contains(e.target.classList[0]) &&    graphs[i].classList.contains("hide-graph")) {
        graphs[i].classList.toggle("hide-graph")
      } else if (!graphs[i].classList.contains('hide-graph') && !graphs[i].classList.contains(e.target.classList[0])) {
        graphs[i].classList.toggle("hide-graph")
      }
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
      <main className="asset-show-main">
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
                        <button className="1day"onClick={this.switch}>1Day</button>
                        <button className="1month"onClick={this.switch}>1Month</button>
                        <button className="3month"onClick={this.switch}>3Month</button>
                        <button className="1year"onClick={this.switch}>1Year</button>
                        <button className="5year"onClick={this.switch}>5Year</button>
                        </section>
                        <div className=" 1day graph">< Chart data={this.props.charts.oneDay}/></div>
                        <div className=" 1month graph hide-graph">< Chart data={this.props.charts.oneMonth}/></div>
                        <div className=" 3month graph hide-graph">< Chart data={this.props.charts.threeMonth}/></div>
                        <div className=" 1year graph hide-graph">< Chart data={this.props.charts.oneYear}/></div>
                        <div className=" 5year graph hide-graph">< Chart data={this.props.charts.fiveYear}/></div>
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
