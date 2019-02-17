import React, { Component } from 'react'
import axios from 'axios'

export default class ConfirmList extends Component {

    state = {
        menu:[],
        totalPrice:0
      }
    
      componentWillMount=async()=>{
        const req = await axios.get("/api/orderDtoes?status=Y")
        const res = req.data
        this.setState({
          menu:res
        })
        this.state.menu.map(item=>{
          this.setState({
            totalPrice : this.state.totalPrice +  (item.menu.price*item.amount)
          }) 
        })
      }
    
      render() {
        return (
          <div>
            <h1>주문내역</h1><hr/>
            <h2>총 금액 : {this.state.totalPrice}</h2>

            {this.state.menu.map(item=>{
                return(
                <div key={item.id}> 
                    <div>{item.dateOrder}</div>
                    <h2>{item.menu.name}</h2><p>{item.menu.price} {item.amount}잔</p>
                    <h3>{item.menu.price * item.amount}</h3>
                </div>
                )
            })}             
          </div>
        )
      }
}
