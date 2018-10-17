import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { PieChart, Pie, Legend, LineChart, Line, Tooltip } from 'recharts';
import Chart from '../charts/chart.jsx'
import Loader from '../loading/loading.jsx'
import TinyChart from '../charts/tiny_chart'
import PieCharts from '../charts/pie_charts'

class userHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { asset: "", pieChartData: undefined}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logThemOut = this.logThemOut.bind(this)
    this.calculatePortfolioComp = this.calculatePortfolioComp.bind(this)
    this.redirectFromPort = this.redirectFromPort.bind(this)
    this.formatPortItems = this.formatPortItems.bind(this)
  }

  componentDidMount() {
      this.props.payload.receivePortfolio(this.props.payload.currentUser.id).then(()=>{this.calculatePortfolioComp()}).then(()=> this.formatPieChartData())
      this.props.payload.receiveAllAssets()
  }

  componentDidUpdate(prevProps) {
    if (this.props.payload.assetPrices) {
      let inp = document.querySelector("#myInput")
      this.autoComplete(inp, this.props.payload.asset.allAssets)
    }
  }

  autoComplete(inp, arr) {

    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < Object.keys(arr).length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].Symbol.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/

            if (document.querySelectorAll(".autocomplete-items > div").length === 5) {
              break
            }
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].Symbol.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].Symbol.substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i].Symbol + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/

                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
                document.querySelector("#myInput").value= e.target.children[1].value

                document.querySelector("#hidden-submit").click()
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/

          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  logThemOut() {
    document.querySelector('body').style.backgroundColor="white";
    this.props.payload.logout()
  }

  update() {
    return e => this.setState({
      asset: e.currentTarget.value
    })
  }

  calculateValue() {

    let val = 0
      this.props.payload.portfolio.orders.forEach((el) => {
        val += (el.price * el.quantity)
      });
    return val
  }


    calculatePortfolioComp() {
      let portItems = []
      let myHash = {}
      this.props.payload.portfolio.orders.forEach((el) => {
        myHash[el.asset_id] = myHash[el.asset_id] || 0
        myHash[el.asset_id] += el.quantity
        console.log(myHash)
      })
      portItems = Object.keys(myHash)

      this.props.payload.receivePortAssets(portItems).then((res)=>{
        this.props.payload.receiveAssetsPrices(res.assets)})
      }

      formatPieChartData() {
        let pieChartDatas = []
        let items = this.props.payload.assetPrices
        for (var key in items) {
          if (items.hasOwnProperty(key)) {
            pieChartDatas.push({name: key, value: items[key].quote.close})
          }
      }

      return pieChartDatas
      }

    formatPortItems() {
      let solution = []
      let pieChartDatas = []
      let items = this.props.payload.assetPrices
      for (var key in items) {
        if (items.hasOwnProperty(key)) {
          solution.push([key, items[key].quote.close, items[key].chart]);
          pieChartDatas.push({name: key, value: items[key].quote.close})
        }

    }
    return solution
    }

  handleSubmit(e) {
    e.preventDefault();
  
    e.persist()
    this.props.payload.receiveAsset(e.target.children[0].children[0].value).then(() =>
    this.props.payload.history.push(`/assets/${e.target.children[0].children[0].value}`))
  }

  redirectFromPort(symbol) {
    let s = symbol.currentTarget.classList[0].toLowerCase()
    this.props.payload.receiveAsset(s).then(() =>
    this.props.payload.history.push(`/assets/${s}`))
  }

  render() {
    if (!this.props.payload.portfolio.orders || !this.props.payload.assetPrices)  {
      return (
        <div className="loader-cont">
              <Loader type="spinningBubbles" color="#21ce99" />
        </div>
      )
    } else {

      return (
        <main className="asset-show-main market-closed">
        <div className="asset-search-bar">
          <div className="navContainer">
            <div className="asset-search-row">
              <div className="logo-and-search">
              <div className="asset-hood-logo">
                <a href="/#"><svg className="ud3GfMdXCOVZXCvKABW5d _3cw4McDwMD97uMTf1wnGGf" width="48" height="48" viewBox="0 0 48 48"><g transform="translate(8 9)"><path fillRule="nonzero" d="M14.723625 23.7500267L14.5395 23.8112533C13.35375 24.2036267 11.60025 24.8073067 10.025625 25.5282133 9.94125 25.5674133 9.886125 25.6771733 9.886125 25.6771733 9.8565 25.74512 9.81975 25.828 9.778125 25.9217067L9.77325 25.9336533C9.595875 26.3334933 9.3525 26.9349333 9.24975 27.1790933L9.168 27.3721067C9.15525 27.4030933 9.163125 27.4381867 9.186375 27.46096 9.201375 27.4751467 9.2205 27.4829867 9.240375 27.4837333 9.25275 27.4837333 9.265125 27.48112 9.27675 27.4751467L9.4665 27.3855467C9.8985 27.1813333 10.44225 26.87184 11.014875 26.6011733L11.034375 26.5922133C12.12225 26.07888 13.349625 25.4990933 14.087625 25.14816 14.088375 25.1477867 14.20725 25.0850667 14.266875 24.9663467L14.820375 23.8616533C14.835 23.8329067 14.8305 23.7981867 14.809125 23.7735467 14.788875 23.7489067 14.753625 23.74032 14.723625 23.7500267M10.303125 22.03792C10.380375 21.8863467 10.738875 21.1994133 10.82025 21.0456L10.83525 21.0194667C13.236375 16.5096 16.162875 12.25584 19.531875 8.37690667L19.62525 8.26938667C19.6545 8.23578667 19.659375 8.18837333 19.638 8.14917333 19.616625 8.10997333 19.57275 8.08869333 19.528875 8.09429333L19.388625 8.11370667C17.17725 8.41685333 14.940375 8.83648 12.736125 9.36101333 12.5175 9.42149333 12.37575 9.56373333 12.345375 9.59696 10.69575 11.5633067 9.133125 13.6341867 7.70025 15.7550933 7.62825 15.8618667 7.620375 16.11872 7.620375 16.11872 7.620375 16.11872 7.981875 18.88064 8.507625 20.9164267 7.204125 24.6471467 6.04125 29.5628267 6.04125 29.5628267 6.03225 29.59456 6.03825 29.62928 6.058125 29.6557867 6.078 29.6822933 6.10875 29.6983467 6.142125 29.69984L6.88425 29.69984C6.930375 29.7005867 6.972 29.6725867 6.987375 29.6296533L7.03875 29.4911467C7.796625 27.4352 8.65875 25.40576 9.6135 23.42784 9.835875 22.96752 10.303125 22.03792 10.303125 22.03792"></path><path fillRule="nonzero" d="M20.61975,9.18293333 L20.61825,9.04256 C20.617125,8.99813333 20.58975,8.95856 20.54775,8.94362667 C20.506125,8.92832 20.458875,8.93989333 20.429625,8.97349333 L20.337,9.08026667 C16.408875,13.6032 13.10775,18.62416 10.523625,24.0016533 L10.463625,24.1274667 C10.44525,24.16704 10.452375,24.2148267 10.48275,24.2461867 C10.503,24.26784 10.53,24.2794133 10.5585,24.28016 C10.57275,24.28016 10.58775,24.2775467 10.601625,24.2719467 L10.731,24.21856 C12.937125,23.3087467 15.19125,22.51952 17.42925,21.87552 C17.5635,21.83744 17.676375,21.7441067 17.7405,21.6205333 C18.723,19.7165333 20.999625,16.03024 20.999625,16.03024 C21.05775,15.9466133 21.0435,15.8237867 21.0435,15.8237867 C21.0435,15.8237867 20.644875,11.4143467 20.61975,9.18293333"></path><path fillRule="nonzero" d="M23.075625,2.08885333 C21.93525,2.06458667 20.579625,2.30874667 19.043625,2.81312 C18.813375,2.89376 18.6315,3.02032 18.466875,3.18122667 C16.906125,4.64096 15.38625,6.18917333 13.95,7.78890667 L13.840125,7.91061333 C13.809,7.94496 13.8045,7.99536 13.82775,8.03530667 C13.851375,8.07525333 13.8975,8.09578667 13.942875,8.08608 L14.102625,8.05173333 C16.418625,7.55893333 18.754125,7.18224 21.046125,6.93285333 C21.19725,6.91642667 21.352875,6.96682667 21.465375,7.06912 C21.579375,7.17216 21.643125,7.31925333 21.640125,7.47232 C21.6015,9.73696 21.684375,12.0131733 21.887625,14.2374933 L21.901125,14.38272 C21.90525,14.42752 21.936375,14.46448 21.979875,14.4760533 C22.040625,14.4809067 22.074375,14.4641067 22.09575,14.43424 L22.17975,14.3151467 C23.472,12.48096 24.876375,10.6971733 26.356125,9.0112 C26.51925,8.82304 26.5635,8.70469333 26.594625,8.53408 C27.06,5.56981333 26.341125,3.37834667 25.69875,2.82357333 C25.141125,2.34272 24.331875,2.11610667 23.075625,2.08885333 Z"></path><polygon className="navLogoStar" points="4 5.56 1.649 7.236 2.516 4.482 .196 2.764 3.083 2.738 4 0 4.917 2.738 7.804 2.764 5.484 4.482 6.351 7.236"></polygon></g></svg></a>
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
                            <button style={{display: "none"}} id = "hidden-submit" type="submit">click</button>
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
                  <Link to="/"><button onClick={this.logThemOut}>Logout!</button></Link>
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
                              Portfolio Value {this.calculateValue()}
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
                            </nav>
                            </section>
                            <section className="pie-charts">
                              <PieCharts data1={this.formatPieChartData()}/>
                            </section>
                        </div>
                      </div>
                      <div className="order-cont">
                        <div className="port-sidebar-content">
                          <div className="port-sidebar-contain">
                          <div className="port-scroll">
                          <div className="port-rand">
                          <section className="port-side-header">
                            <div>
                            <header className="port-h3">
                            <h3>Cryptocurrencies</h3>
                            </header>
                            </div>
                            <a href=""></a>
                          </section>
                          <section className="port-side-portfolio">
                            <header className="port-h3">
                            <h3>Portfolio</h3>
                            </header>
                            {this.formatPortItems().map(function(item, index) {
                              return <a className={`${item[0]}`}onClick={this.redirectFromPort} key={index}><div className="port-item-h4-cont"><h4>{item[0]}</h4></div><div className="port-side-graph-cont"><div><div className="second-port-graph-cont"><div className="third-port-graph-cont"><div className="last-port-graph-cont"><TinyChart data={item[2]} /> </div></div></div></div></div><h3 className="port-item-h3">${item[1].toFixed(2)}</h3></a>;
                            }.bind(this))}
                          </section>
                            </div>
                            </div>
                          </div>
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
}


export default withRouter(userHome)
