import {LineChart, Line, XAxis, YAxis} from 'recharts';
import React from 'react'

class TinyChart extends React.Component {
  constructor(props) {
    super(props)

  }

	render () {
  	return (
    	<LineChart width={60} height={16} data={this.props.data}>
        <Line type='monotone' dataKey='high' stroke='#21ce99' strokeWidth={1} dot={false}/>
        <YAxis hide={true} type="number" domain={['dataMin', 'dataMax']}/>
      </LineChart>
    );
  }
}

export default TinyChart
