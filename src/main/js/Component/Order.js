import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../css/Order.css'

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
        <div className="order">
          <h4 className="order-text"><strong>주문내역</strong></h4>
          <hr></hr>
        {this.state.menu.map(item=>{
          return(
            <div key={item.id} className="order-item"> 
              <span><strong>{item.menu.name}</strong></span>
              <span><strong>{item.menu.price * item.amount}</strong></span>
              <p>{item.menu.price} x {item.amount}잔</p>
              <hr/>
            </div>
          )
        })} 

        <div className="order-nav">
          <strong>총 구매 금액</strong>
          <h1 className="order-total-price">{this.state.totalPrice}원</h1>
          <div className="order-purchase">
            <a href="/payment">구매하기</a>
          </div>
        </div>  
      </div>
    )
  }
}

