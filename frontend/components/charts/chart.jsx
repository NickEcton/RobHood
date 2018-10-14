import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class TinyLineChart extends React.Component {
  constructor(props) {
    super(props)
  }



  render () {

  	return (
    	<LineChart width={676} height={196} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="label" hide={true} tickLine={false}/>
       <YAxis hide={true} type="number" domain={['dataMin - 1', 'dataMax']}/>
       <Line dot={false} type="monotone" dataKey="high" stroke="#21ce99"/>
       <Tooltip />
      </LineChart>
    );
  }
}


export default TinyLineChart
