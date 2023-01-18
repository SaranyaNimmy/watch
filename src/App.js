import React from 'react'
import Events from './Events'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Class from './Class'
import Home from './Home'
import Cart from './Cart'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Products from './Products'
import Login from './Login'
import './App.css'


class App extends React.Component{
  state={
    products:[
      {name:"Apple Watch",price:"85k",pic:"https://shop.unicornstore.in/uploads/images/medium/dbf5c60c645fd73ca48dd8a7b95e8fab.jpeg"},
      {name:"Pebble Smartwatch",price:700,pic:"https://rukminim1.flixcart.com/image/750/750/l37mtu80/smartwatch/z/q/7/-original-imagedz8phvtbdhw.jpeg?q=20"},
      {name:"Fossil Gen 5E",price:"14k",pic:"https://img1.gadgetsnow.com/gd/images/products/additional/medium/G382187_View_1.jpg"}
    ]
  }

  render(){
    return(
      <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    <Route path="/products" element={<Products products={this.state.products}/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
    
    </div>
    )
  }
}  
export default App