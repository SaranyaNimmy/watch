import React, { Component } from 'react'

export default class Contact extends Component {
    state={
        data:[
			{name:"Satya",id:"1"},
            {name:"Saranya",id:"2"},
            {name:"Ambica",id:"3"},
            {name:"Balaji",id:"4"},
            {name:"Vasu",id:"5"},
			{name:"Anitha",id:"6"},
        ],
        text:""
    }
    handleSave=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
	//converting the data into lowercase
	let pair=this.state.text.toString().trim().toLowerCase();
	//variable for string matched data (COMPARING)
	let duplicateData=[];
	//logic
	if(pair && pair.length>0){
		duplicateData=this.state.data.filter((i)=>{
			//gives the data which matches with pair information by converting into low
			return i.name.toLowerCase().match(pair)
		})
	}
    return (
      <div>
        <input 
            name="text"
            placeholder='Enter to search'
            onChange={this.handleSave}/>
		{
			duplicateData.map((i)=>(
				<p key={i.id}>{i.name}</p>
			))
		}
      </div>
    )
  }
}
