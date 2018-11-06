import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import CustomToolTip from './custom_tool_tip.jsx'

class TinyLineChart extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render () {
    if (this.props.priceflux < 0) {
       let neg = "-"
    } else {
      let neg = '+'
    }
  	return (
    	<LineChart width={676} height={196} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="label" hide={true} tickLine={false}/>
       <YAxis hide={true} type="number" domain={['dataMin - 1', 'dataMax']}/>
       <Line dot={false} type="monotone" dataKey="high" stroke="#21ce99" type= {d3.curveCardinal.tension(0.8)} />
       <Tooltip isAnimationActive={false} content={< CustomToolTip openPrice={this.props.openPrice} priceFlux={this.props.priceFlux} priceFluxPercent={this.props.priceFluxPercent} price={this.props.price} neg={"-"}/>} offset={-24} position={{y: -15}}/>
      </LineChart>
    );
  }
}


export default TinyLineChart
