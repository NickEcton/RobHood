import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { LineChart, Line } from 'recharts';
import Chart from '../charts/chart.jsx'
import Loader from '../loading/loading.jsx'
import ToggleButton from '../asset_toggle_button.jsx'

class AssetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { asset: "", data: undefined, quantity: ''}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOrderSubmit = this.handleOrderSubmit.bind(this)
    this.switch = this.switch.bind(this)
    this.logThemOut = this.logThemOut.bind(this)
    this.calculatePriceChange = this.calculatePriceChange.bind(this)
  }

  componentDidMount() {
    this.props.receiveAsset(this.props.match.params.symbol).then(()=>
    Promise.all([this.props.receiveClosingPrice(this.props.asset.stock.company.symbol),
    this.props.receiveChartOneDay(this.props.asset.stock.company.symbol),
    this.props.receiveChartOneMonth(this.props.asset.stock.company.symbol),
    this.props.receiveChartThreeMonth(this.props.asset.stock.company.symbol),
    this.props.receiveChartOneYear(this.props.asset.stock.company.symbol),
    this.props.receiveChartFiveYear(this.props.asset.stock.company.symbol)]))
    this.props.receiveAllAssets().then(()=>this.props.receiveNews(     this.props.asset.stock.company.companyName.split(" ")[0])).then(()=>
    this.setState( {data: this.props.charts.oneDay} ))
  }
  componentDidUpdate(prevProps) {

  if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
    if (document.querySelector("body").classList.contains("market-closed")) {
      document.querySelector("body").classList.toggle("market-closed")
    }
    Promise.all([this.props.receiveClosingPrice(this.props.asset.stock.company.symbol),  this.props.receiveNews(this.props.asset.stock.company.companyName),
    this.props.receiveChartOneDay(this.props.asset.stock.company.symbol),
    this.props.receiveChartOneMonth(this.props.asset.stock.company.symbol),
    this.props.receiveChartThreeMonth(this.props.asset.stock.company.symbol),
    this.props.receiveChartOneYear(this.props.asset.stock.company.symbol),
    this.props.receiveChartFiveYear(this.props.asset.stock.company.symbol)]).then(()=>this.props.receiveNews(     this.props.asset.stock.company.companyName.split(" ")[0])).then(()=> this.setState( {data: this.props.charts.oneDay} ))
  }
    let inp = document.querySelector("#myInput")
  if (inp) {
    this.autoComplete(inp, this.props.allAssets)
  }
}

  componentWillUnmount() {
    if (document.querySelector("body").classList.contains("market-closed")) {
      document.querySelector("body").classList.toggle("market-closed")
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

  logThemOut() {

    this.props.logout()
  }

  autoComplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < Object.keys(arr).length; i++) {
          if (arr[i].Symbol.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            if (document.querySelectorAll(".autocomplete-items > div").length === 5) {
              break
            }
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].Symbol.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].Symbol.substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i].Symbol + "'>";
                b.addEventListener("click", function(e) {
                document.querySelector("#myInput").value= e.target.children[1].value
                closeAllLists();
                document.querySelector("#hidden-submit").click()
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  calculatePriceChange() {
    let obj = this.state.data
    let high = 0
    let low = 0
    for ( let i =0; i < obj.length; i++ ) {
      if (i === 0) {
        high = obj[i].high
        low = obj[i].low
        continue
      }
      if (obj[i].high > high ) {
        high = obj[i].high
      }
      if (obj[i].low < low) {
        low = obj[i].low
      }
    }

    if (obj[0].high < obj[obj.length-1].high) {
      return high - low
    } else {
      return low - high
    }
  }

  calculatePricePercentChange() {
    let obj = this.state.data
    let high = 0
    let low = 0
    for ( let i =0; i < obj.length; i++ ) {
      if (i === 0) {
        high = obj[i].high
        low = obj[i].low
        continue
      }
      if (obj[i].high > high ) {
        high = obj[i].high
      }
      if (obj[i].low < low) {
        low = obj[i].low
      }
    }

    if (obj[0].high < obj[obj.length-1].high) {

      return (obj[obj.length-1].high / obj[0].high)*100
    } else {
      return -(obj[obj.length-1].high / obj[0].high)
    }
  }

  update() {
    return e => this.setState({
      asset: e.currentTarget.value
    })
  }

  orderUpdate() {
    return e => this.setState({
      quantity: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({asset: e.target.children[0].children[0].value}, () =>{
      e.persist()
      this.props.receiveAsset(this.state.asset).then(() =>
      this.props.history.push(`/assets/${this.state.asset}`))
    })

  }

  handleOrderSubmit(e) {
    e.preventDefault();

    this.props.createOrder({"asset_symbol": this.props.asset.stock.company.symbol, "portfolio_id": this.props.portfolio.id, "price": this.props.asset.closing, "quantity": this.state.quantity}).then(()=> this.props.history.push(`/whatever`))

  }

  render() {
 if (!this.state.data || !this.props.asset.news) {

   return (
   <div className="loader-cont">
         <Loader type="spinningBubbles" color="#21ce99" />
   </div>
 )} else {
    return (
      <div className="asset-show-main">
      <div className="asset-search-bar">
        <div className="navContainer">
          <div className="asset-search-row">
            <div className="logo-and-search">
            <div className="asset-hood-logo">
              <a href="/#"><svg className="smol-svg" width="48" height="48" viewBox="0 0 48 48"><g transform="translate(8 9)"><path fillRule="nonzero" d="M14.723625 23.7500267L14.5395 23.8112533C13.35375 24.2036267 11.60025 24.8073067 10.025625 25.5282133 9.94125 25.5674133 9.886125 25.6771733 9.886125 25.6771733 9.8565 25.74512 9.81975 25.828 9.778125 25.9217067L9.77325 25.9336533C9.595875 26.3334933 9.3525 26.9349333 9.24975 27.1790933L9.168 27.3721067C9.15525 27.4030933 9.163125 27.4381867 9.186375 27.46096 9.201375 27.4751467 9.2205 27.4829867 9.240375 27.4837333 9.25275 27.4837333 9.265125 27.48112 9.27675 27.4751467L9.4665 27.3855467C9.8985 27.1813333 10.44225 26.87184 11.014875 26.6011733L11.034375 26.5922133C12.12225 26.07888 13.349625 25.4990933 14.087625 25.14816 14.088375 25.1477867 14.20725 25.0850667 14.266875 24.9663467L14.820375 23.8616533C14.835 23.8329067 14.8305 23.7981867 14.809125 23.7735467 14.788875 23.7489067 14.753625 23.74032 14.723625 23.7500267M10.303125 22.03792C10.380375 21.8863467 10.738875 21.1994133 10.82025 21.0456L10.83525 21.0194667C13.236375 16.5096 16.162875 12.25584 19.531875 8.37690667L19.62525 8.26938667C19.6545 8.23578667 19.659375 8.18837333 19.638 8.14917333 19.616625 8.10997333 19.57275 8.08869333 19.528875 8.09429333L19.388625 8.11370667C17.17725 8.41685333 14.940375 8.83648 12.736125 9.36101333 12.5175 9.42149333 12.37575 9.56373333 12.345375 9.59696 10.69575 11.5633067 9.133125 13.6341867 7.70025 15.7550933 7.62825 15.8618667 7.620375 16.11872 7.620375 16.11872 7.620375 16.11872 7.981875 18.88064 8.507625 20.9164267 7.204125 24.6471467 6.04125 29.5628267 6.04125 29.5628267 6.03225 29.59456 6.03825 29.62928 6.058125 29.6557867 6.078 29.6822933 6.10875 29.6983467 6.142125 29.69984L6.88425 29.69984C6.930375 29.7005867 6.972 29.6725867 6.987375 29.6296533L7.03875 29.4911467C7.796625 27.4352 8.65875 25.40576 9.6135 23.42784 9.835875 22.96752 10.303125 22.03792 10.303125 22.03792"></path><path fillRule="nonzero" d="M20.61975,9.18293333 L20.61825,9.04256 C20.617125,8.99813333 20.58975,8.95856 20.54775,8.94362667 C20.506125,8.92832 20.458875,8.93989333 20.429625,8.97349333 L20.337,9.08026667 C16.408875,13.6032 13.10775,18.62416 10.523625,24.0016533 L10.463625,24.1274667 C10.44525,24.16704 10.452375,24.2148267 10.48275,24.2461867 C10.503,24.26784 10.53,24.2794133 10.5585,24.28016 C10.57275,24.28016 10.58775,24.2775467 10.601625,24.2719467 L10.731,24.21856 C12.937125,23.3087467 15.19125,22.51952 17.42925,21.87552 C17.5635,21.83744 17.676375,21.7441067 17.7405,21.6205333 C18.723,19.7165333 20.999625,16.03024 20.999625,16.03024 C21.05775,15.9466133 21.0435,15.8237867 21.0435,15.8237867 C21.0435,15.8237867 20.644875,11.4143467 20.61975,9.18293333"></path><path fillRule="nonzero" d="M23.075625,2.08885333 C21.93525,2.06458667 20.579625,2.30874667 19.043625,2.81312 C18.813375,2.89376 18.6315,3.02032 18.466875,3.18122667 C16.906125,4.64096 15.38625,6.18917333 13.95,7.78890667 L13.840125,7.91061333 C13.809,7.94496 13.8045,7.99536 13.82775,8.03530667 C13.851375,8.07525333 13.8975,8.09578667 13.942875,8.08608 L14.102625,8.05173333 C16.418625,7.55893333 18.754125,7.18224 21.046125,6.93285333 C21.19725,6.91642667 21.352875,6.96682667 21.465375,7.06912 C21.579375,7.17216 21.643125,7.31925333 21.640125,7.47232 C21.6015,9.73696 21.684375,12.0131733 21.887625,14.2374933 L21.901125,14.38272 C21.90525,14.42752 21.936375,14.46448 21.979875,14.4760533 C22.040625,14.4809067 22.074375,14.4641067 22.09575,14.43424 L22.17975,14.3151467 C23.472,12.48096 24.876375,10.6971733 26.356125,9.0112 C26.51925,8.82304 26.5635,8.70469333 26.594625,8.53408 C27.06,5.56981333 26.341125,3.37834667 25.69875,2.82357333 C25.141125,2.34272 24.331875,2.11610667 23.075625,2.08885333 Z"></path><polygon className="navLogoStar" points="4 5.56 1.649 7.236 2.516 4.482 .196 2.764 3.083 2.738 4 0 4.917 2.738 7.804 2.764 5.484 4.482 6.351 7.236"></polygon></g></svg></a>
            </div>
              <div className="asset-search-styling">
                <div className="asset-search-border">
                  <div className="asset-search-control">
                    <span>
                      <div className="asset-select-input">
                      <form autoComplete="off" onSubmit={this.handleSubmit}>
                      <div className="autocomplete">
                        <input id="myInput"type="text" placeholder="Search" className="asset-search-input" value={this.state.asset} onChange={this.update()}/>
                        </div>
                        <button id="hidden-submit" style={{display: "none"}} type="submit">click</button>
                      </form>
                      </div>
                    </span>
                  </div></div>
                  <svg className="asset-search-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g id="search" transform="translate(-11.000000, -11.000000)"><path d="M23.0733726,24.4447312 C21.8075531,25.4199921 20.2215106,26 18.5,26 C14.3578644,26 11,22.6421356 11,18.5 C11,14.3578644 14.3578644,11 18.5,11 C22.6421356,11 26,14.3578644 26,18.5 C26,20.2215106 25.4199921,21.8075531 24.4447312,23.0733726 L28.1425948,26.7712362 L26.7712362,28.1425948 L23.0733726,24.4447312 Z M18.5,24 C21.5375661,24 24,21.5375661 24,18.5 C24,15.4624339 21.5375661,13 18.5,13 C15.4624339,13 13,15.4624339 13,18.5 C13,21.5375661 15.4624339,24 18.5,24 Z" id="Combined-Shape"></path></g></svg>
              </div>
            </div>
            <div className="navLinks">
              <div className="navLinkContainer">
                <a href="/#"><div className="homeLink">Home</div></a>
                <div className="notifications">< ToggleButton /></div>
                <Link to="/"><button className="toggle-home-btn" onClick={this.logThemOut}>Logout!</button></Link>
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
                    {this.props.asset.stock.company.tags.map(function(tag, index){
                      return <div className="tags" key={index}><a className="tag-link">{tag}</a></div>;
                    })}
                  </div>
                  <div className="head-row">
                    <div className="graph-cont">
                      <header className="asset-header">
                        <h1>{this.props.asset.stock.company.companyName}</h1>
                      </header>
                      <div className="qwe">
                        <section className="graph-begin">
                          <header className="graph-header">
                            <h1 className="graph-asset-price">
                            ${this.props.asset.closing}
                            </h1>
                            <div className="today-movement">
                            ${this.props.asset.stock.quote.change.toFixed(2)} ({this.props.asset.stock.quote.changePercent.toFixed(2)}%)
                            </div>
                            <div className="after-hours">
                            </div>
                          </header>
                          <div className="graph">< Chart data={this.state.data} openPrice ={this.props.asset.stock.quote.open} priceFlux= {this.props.asset.stock.quote.change} priceFluxPercent={this.props.asset.stock.quote.changePercent} price={this.props.asset.closing}/></div>
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
                          {this.props.asset.stock.company.description + " "}
                          <span><a> Read More</a></span>
                          </h3>
                          </div>
                          <div className="about-grid">
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Symbol
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.symbol}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Company
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.companyName}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            CEO
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.CEO}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Industry
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.industry}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Sector
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.sector}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            Exchange
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.exchange}
                            </div>
                            </div>
                            <div className="about-grid-item">
                            <div className="about-grid-item-title">
                            IssueType
                            </div>
                            <div className="about-grid-item-object">
                              {this.props.asset.stock.company.issueType}
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
                            {this.props.asset.stock.company.tags.map(function(tag, index){
                              return <div className="collections-item" key={index}><a className="tag-link">{tag}</a></div>;
                            })}
                            </div>
                        </section>
                        <section className="news">
                          <header className= "news-header-cont">
                            <div className="the-news-header-content">
                            <h2 style={{margin: '0'}}>News</h2>
                            <a>Show More</a>
                            </div>
                          </header>
                          <div>
                          {this.props.asset.news.articles.map(function(article, index){
                            return (
                            <div key={index} className="news-padding-provider">
                              <div className="news-flex-provider">
                                <div style={{backgroundImage: `url(${article.urlToImage})`}} className="news-left-image"></div>
                                  <div className="news-content-container">
                                    <div className="news-source-cont">
                                      <span>{article.source.name}</span>

                                    </div>
                                    <div className="news-description-cont">
                                      <h3>{article.title}</h3>
                                    </div>
                                  </div>

                                </div>
                                <a className= "rand-a" href={article.url}></a>
                              </div>);
                          })}
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="order-cont">
                      <div className="sidebar-content">
                        <form onSubmit={this.handleOrderSubmit}className="take-order">
                          <header className="order-header">
                            <div className="order-head-cont">
                            <span>Buy {this.props.asset.stock.company.symbol}</span>
                            </div></header>
                          <div>
                            <div className="order-asset-detail">
                              <div className="order-shares-detail">
                                <label>
                                  <div>Shares</div>
                                  <div><input className="order-shares-input" min="0" placeholder="0" value={this.state.quantity} onChange={this.orderUpdate()}/></div>
                                </label>
                              </div>
                              <div className="order-market-price-detail">
                                <div>
                                  <a>Market Price</a>
                                </div>
                                <span>${this.props.asset.closing}</span></div>
                              <div className="order-cost">
                                <label>
                                  <div className="order-estimated-cost">
                                  Estimated Cost
                                  </div>
                                  <div>{(this.state.quantity * this.props.asset.closing).toFixed(2)}</div>
                                </label></div>
                            </div>
                            <div className="order-option-check" role="button" aria-disabled="false" tabIndex="0">
                              <div className="order-option-checkbox-cont">
                                <div role="checkbox" aria-checked="true" aria-labelledby="1" aria-disabled="false"></div>
                              </div>
                              <span>This order should only execute during normal market hours.</span></div>
                            <div>
                              <div className="review-button-cont">
                                <div className="review-button">
                                  <button className="review-button-btn">Place Order</button>
                                </div>
                              </div>
                            </div>
                            <div className="buying-power">
                              $0.00
                               Buying Power Available
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
      </div>
    )
  }
}
}
export default AssetForm
