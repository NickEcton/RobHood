import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import CustomToolTip from './custom_tool_tip_user.jsx'


class TinyLineChart extends React.Component {
  constructor(props) {
    super(props)

  }


  openPrice(){

    return this.props.data[0].value
  }

  priceFlux() {
    return (this.props.data[this.props.data.length - 1].value - this.props.data[0].value)
  }

  priceFluxPercent() {
    return (this.priceFlux() / this.props.data[0].value) * 100
  }

  price() {
    return this.props.data[this.props.data.length - 1].value
  }

  neg() {
    if (this.priceFlux < 0) {
      return "-"
    } else {
      return "+"
    }
  }

  renderToolTip() {

    return 10;
  }

  render () {

    if (this.props.data.length === 0) {
      return (
        <LineChart width={676} height={196} data={[0]}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        </LineChart>
      )
    }

  	return (
    	<LineChart width={676} height={196} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="label" hide={true} tickLine={false}/>
       <YAxis hide={true} type="number" domain={['dataMin - 1', 'dataMax']}/>
       <Line dot={false} type="monotone" dataKey="value" stroke="#21ce99" type= {d3.curveCardinal.tension(0.8)}/>
       <Tooltip isAnimationActive={false}  offset={-24} content={< CustomToolTip openPrice={this.openPrice()} priceFlux={this.priceFlux()} priceFluxPercent={this.priceFluxPercent()} price={this.price()} neg={this.neg()} let type={"value"}/> } position={{y: -15}}/>
      </LineChart>
    );
  }
}


export default TinyLineChart
