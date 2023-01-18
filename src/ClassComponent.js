import React from 'react'
import StateExample from './StateExample'
import FunctionalExample from './FunctionalExample'
class ClassComponent extends React.Component{
	state={
		students:[
			{name:"balaji",age:22},
			{name:"vasu",age:25},
			{name:"david",age:21},
			{name:"Mohit",age:22}
		]
	}
	render(){
		console.log(this.state)
		return(
			<div>
				<h1>This is class component {this.props.demo}</h1>
		        <StateExample employees={this.state.students}/>
		        <FunctionalExample employees={this.state.students}/>	
			</div>
			)
	}
}
export default ClassComponent