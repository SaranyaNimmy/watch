import React from 'react'

class Events extends React.Component{
	state={
		username:"",
		password:""
	}
	handleChange=(op)=>{
		this.setState({
			[op.target.name]:op.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
	}
	render(){
		return(
			<div>
				<input name="username" onChange={this.handleChange} placeholder="Enter your username"/>
				<input name="password" onChange={this.handlePassword} placeholder="Enter the password"/>
				<button onClick={this.handleClick}>Submit</button>
			</div>
			)
	}
}
export default Events 