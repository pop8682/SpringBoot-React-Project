import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Order extends Component {
  state = {
    menu:[],
    totalPrice:0
  }

  componentWillMount=async()=>{
    const req = await axios.get("/api/orderDtoes?status=N")
    const res = req.data
    console.log(res)
    this.setState({
      menu:res
    })
    console.log(this.state.menu)
    this.state.menu.map(item=>{
      this.setState({
        totalPrice : this.state.totalPrice +  (item.menu.price*item.amount)
      }) 
    })
    console.log(this.state.totalPrice)
  }

  

  render() {
    return (
      <div>
        <h1>주문내역</h1><hr/>
        <h2>총 금액 : {this.state.totalPrice}</h2>
        <Link to={{
          pathname:"/orderConfirm",
          state:{totalPrice:this.state.totalPrice}
          }}>구매하기</Link>
        {this.state.menu.map(item=>{
          return(
            <div key={item.id}> 
              <h2>{item.menu.name}</h2><p>{item.menu.price} {item.amount}잔</p>
              <h3>{item.menu.price * item.amount}</h3>
            </div>
          )
        })} 
        
      </div>
    )
  }
}

