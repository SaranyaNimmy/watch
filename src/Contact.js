import React, { Component } from 'react'

export default class Contact extends Component {
    state={
        data:[
            {name:"Saranya",id:"1"},
            {name:"Ambica",id:"2"},
            {name:"Balaji",id:"3"},
            {name:"Vasu",id:"4"},
        ],
        text:""
    }
    handleSave=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input 
            name="text"
            placeholder='Enter to search'
            onChange={this.handleSave}/>
      </div>
    )
  }
}
