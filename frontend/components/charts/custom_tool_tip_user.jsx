import React from 'react'


class CustomToolTip extends React.Component {

  constructor(props) {
    super(props)

  }

  componentWillReceiveProps(nextProps) {
    let price = document.querySelector(".graph-asset-price");
    let changePrice = document.querySelector(".today-movement");
    let neg = "+";
    let type = this.props.type
    if (this.props.active && nextProps.payload[0]) {

      let priceFluxCalc = nextProps.payload[0].payload.value - this.props.openPrice;
      let priceFluxPercentCalc = (priceFluxCalc * 100/this.props.openPrice);
      if (priceFluxCalc < 0) { neg = "-" ;}
      let priceFluxString = `${neg}$${Math.abs(priceFluxCalc).formatMoney(2)} (${priceFluxPercentCalc.formatMoney(2)}%)`
      price.innerHTML = `$${nextProps.payload[0].value.formatMoney(2)}`;
      changePrice.innerHTML = priceFluxString;
    } else if (this.props.priceFlux !== nextProps.priceFlux) {

      price.innerHTML = `$${this.props.price.formatMoney(2)}`;
      changePrice.innerHTML = `${nextProps.neg}$${nextProps.priceFlux.formatMoney(2)} (${nextProps.priceFluxPercent.formatMoney(2)}%)`;
    } else {

      price.innerHTML = `$${this.props.price.formatMoney(2)}`;
     changePrice.innerHTML = `${this.props.neg}$${this.props.priceFlux.formatMoney(2)} (${this.props.priceFluxPercent.formatMoney(2)}%)`
    }



    }


  render() {

    const { active } = this.props
    if (active) {
      const { payload } = this.props;
      if (payload && payload[0] && payload[0].payload) {
        return (
          <div className="custom-tooltip">
            {payload[0].payload.date}
          </div>
        );
      }
    }
    return null;
  }

}

export default CustomToolTip
