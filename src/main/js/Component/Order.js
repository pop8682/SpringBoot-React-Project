import React, { Component } from 'react'
import axios from 'axios'

export default class Order extends Component {
  state = {
    menu:[]
  }

  componentWillMount=async()=>{
    const req = await axios.get("/api/orderDtoes/")
    const res = req.data
    console.log(res)
    this.setState({
      menu:res
    })
    console.log(this.state.menu)
  }

  render() {
    return (
      <div>
        <h1>주문내역</h1><hr/>
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

