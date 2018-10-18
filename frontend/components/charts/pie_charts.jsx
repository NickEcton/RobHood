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
        <Pie dataKey={'value'} animationBegin={0} data={this.props.data1} cx={'25%'} cy={125} innerRadius={60} outerRadius={80} fill="#82ca9d" label/>
        <Pie dataKey={'value'} animationBegin={0} data={this.data2()} cx={'75%'} cy={125} innerRadius={60} outerRadius={80} fill="#82ca9d" label/>
        <Tooltip/>
       </PieChart>
    );
  }
}

export default PieCharts
