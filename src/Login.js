import React from 'react'

class Login extends React.Component{
 state={
    username:"",
    passcode:""
  }
  handleChange=(e)=>{
    this.setState({
       [e.target.name]:e.target.value
    })
  }
  handleClick=()=>{
    console.log(this.state.username,this.state.passcode)
  }
  render(){
    return(
            <div>
                <input 
                name="username" 
                type="text" 
                placeholder="Enter username" 
                onChange={this.handleChange}/>
                <input 
                name="passcode"
                 type="password" 
                 placeholder="Enter password" onChange={this.handleChange}/>
                <p>username:{this.state.username}</p>
                <p>password:{this.state.passcode}</p>
                <button onClick={this.handleClick}>Submit</button>
            </div>
      )
  }
}
export default Login