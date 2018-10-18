import React from 'react'


class CustomToolTip extends React.Component {

  constructor(props) {
    super(props)

  }

  componentWillReceiveProps(nextProps) {
    let price = document.querySelector(".graph-asset-price");
    let changePrice = document.querySelector(".today-movement");
    let neg = "+";

    if (this.props.active && nextProps.payload[0]) {
      let priceFluxCalc = nextProps.payload[0].payload.close - this.props.openPrice.toFixed(2);
      let priceFluxPercentCalc = (priceFluxCalc * 100/this.props.openPrice).toFixed(2);
      if (priceFluxCalc < 0) { neg = "-" ;}
      let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).toFixed(2)} (${priceFluxPercentCalc}%)`
      price.innerHTML = `$${nextProps.payload[0].value}`;
      changePrice.innerHTML = priceFluxString;
    } else if (this.props.priceFlux !== nextProps.priceFlux) {
      debugger
      price.innerHTML = `$${this.props.price}`;
      changePrice.innerHTML = `${nextProps.neg}$${nextProps.priceFlux} (${nextProps.priceFluxPercent.toFixed(2)}%)`;
    } else {
      debugger
      price.innerHTML = `$${this.props.price}`;
     changePrice.innerHTML = `${this.props.neg}$${this.props.priceFlux} (${this.props.priceFluxPercent.toFixed(2)}%)`
    }



    }


  render() {

    const { active } = this.props
    if (active) {
      const { payload } = this.props;
      if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            {payload[0].payload.label}
          </div>
        );
      }
    }
    return null;
  }

}

export default CustomToolTip
