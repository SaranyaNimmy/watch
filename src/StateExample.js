import React from 'react'

class StateExample extends React.Component{
	render(){
		return(
			<div>
				from state StateExample
				/*<p>Name: {this.props.employees[0].name}</p>
				<p>Age: {this.props.employees[0].age}</p>
				<p>Name: {this.props.employees[1].name}</p>
				<p>Age: {this.props.employees[1].age}</p>
				<p>Name: {this.props.employees[2].name}</p>
				<p>Age: {this.props.employees[2].age}</p>
				<p>Name: {this.props.employees[3].name}</p>
				<p>Age: {this.props.employees[3].age}</p>*/
				{
					this.props.employees.map((emp)=>(
						<div>
							<p>Name: {emp.name}</p>
							<p>Age: {emp.age}</p>
						</div>
						))
				}
			</div>
			)
	}
}
export default StateExample