import {PieChart, Pie, Legend, Tooltip} from 'recharts'
import React from 'react'

class PieCharts extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

data2() {
const data02 =
[{name: 'Group A', value: 2400}, {name: 'Group B',     value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
                  return data02
                }
	render () {
  	return (
    	<PieChart width={800} height={400}>
        <Pie animationBegin={800} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Pie animationBegin={1200} data={this.data2()} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
       </PieChart>
    );
  }
}

export default PieCharts
