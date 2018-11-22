# Rob-Hood

Rob-Hood, a Robinhood clone, combines real-time stock and crypto-currency data with portfolio building functionality to give users the full stock-trading experience.

[RobHood Demo](https://rob-hood.herokuapp.com/#/)

## Technologies

+ Backend: Rails/ActiveRecord/PostgreSQL
+ Frontend: React/Redux
+ [IEX API](https://iextrading.com/developer/docs/)
+ [News API](https://newsapi.org/docs)
+ [Recharts](http://recharts.org/en-US/)
+ [CSS Animate](https://daneden.github.io/animate.css/)

## Features 

+ Secure fronted to backend user creation utilizing BCrypt
+ Real-time and historical price data for all stocks and cryptocurrencies traded on the NASDAQ and NYSE exchanges
+ Real-time and historical portfolio tracking data for the individual user
+ Helpful and interactive graphs to display all historical and relevant information elegantly
+ Ability to facilitate faux trades in the market, using up-to-the-minute pricing
+ Helpful display of all relevant news articles displayed on each asset's page and general information displayed on home

### Dashboard and Portfolio
Upon log in, the user is directed to their home page. Here they can see the historical performance of their portfolio, as well as the current asset struture and up-to-the-minute performance of each stock they own.


<img src="https://github.com/NickEcton/RobHood/blob/master/UserHomePageGif.gif" width="100%" height="10%" />

### Asset Show Page
After searching a stock, this page will show all releveant information, including histroical price, current company ownership, and types of stock available. Users are able to toggle the view mode from open-market to clsoed-market hours, mimicking the functionality of the real Robinhood site. Users are able to facilitate trades on this page, and on successful trade the user will be redirected to their home page and shown an updated version of the portfolio.

<img src="https://github.com/NickEcton/RobHood/blob/master/AssetShowPage2.gif" width="100%" height="10%" />

## Code

### Compute portfolio composition using order history

Instead of storing an updated portfolio for each user in the database, I used this function to derive the composition of a users portfolio. This function is called each time the user show page is mounted, meaning that after a trade is completed the resulting portfolio composition will be updated immediately.

```javascript
calculatePortfolioComp() {
  let portItems = []
  let myHash = {}
  if (!this.props.payload.portfolio.orders) {
    return 0
  } else {
    if (this.props.payload.portfolio.orders.length === 0) {
      return 1
    } else {
      this.props.payload.portfolio.orders.forEach((el) => {
        myHash[el.asset_id] = myHash[el.asset_id] || 0
        myHash[el.asset_id] += el.quantity
      })
      return Object.keys(myHash)
    }
   }
 }

```

### Create functionality for graph tooltip to update shown price based on mouse location

The user and asset graphs incorporate an interactive tooltip that displays the historic portfolio/asset price on the date the user is hovering over on the graph. This historic date includes a percentage change that references the gain/loss that occurred from the current range of time selected for the graph up until the date being hovered.

```javascript 
componentWillReceiveProps(nextProps) {
  let price = document.querySelector(".graph-asset-price");
  let changePrice = document.querySelector(".today-movement");
  let neg = "+";
  let type = this.props.type
  
  if (this.props.active && nextProps.payload[0]) {
    let priceFluxCalc = nextProps.payload[0].payload.close - this.props.openPrice;
    let priceFluxPercentCalc = (priceFluxCalc * 100/this.props.openPrice);
    if (priceFluxCalc < 0) { neg = "-" ;}
    let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).formatMoney(2)} (${priceFluxPercentCalc.formatMoney(2)}%)`
    price.innerHTML = `$${nextProps.payload[0].value.formatMoney(2)}`;
    changePrice.innerHTML = priceFluxString;
    
  } else if (this.props.priceFlux !== nextProps.priceFlux) {
    price.innerHTML = `$${this.props.price.formatMoney(2)}`;
    changePrice.innerHTML = `${nextProps.neg}$${nextProps.priceFlux.formatMoney(2) (${nextProps.priceFluxPercent.formatMoney(2)}%)`;
    
  } else {
    price.innerHTML = `$${this.props.price.formatMoney(2)}`;
    changePrice.innerHTML = `${this.props.neg}$${this.props.priceFlux.formatMoney(2)} (${this.props.priceFluxPercent.formatMoney(2)}%)`
  }
}
```

