import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class TinyLineChart extends React.Component {
  constructor(props) {
    super(props)

  }

  renderToolTip() {

    return 10;
  }

  render () {

  	return (
    	<LineChart width={676} height={196} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="label" hide={true} tickLine={false}/>
       <YAxis hide={true} type="number" domain={['dataMin - 1', 'dataMax']}/>
       <Line dot={false} type="monotone" dataKey="value" stroke="#21ce99" type= {d3.curveCardinal.tension(0.8)}/>
       <Tooltip isAnimationActive={false} content={this.renderToolTip} offset={-24} position={{y: -15}}/>
      </LineChart>
    );
  }
}


export default TinyLineChart
