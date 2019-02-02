import React, { Component } from 'react'
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default class Menu extends Component {
    state = {
        number:0,
        price:0,
        options:[]
    }

    handleClick=async()=>{
        const menu_id = this.props.location.state.id
        const amount = this.state.number
        console.log(menu_id)
        const req = await axios({
            method:'POST',
            url:`/api/orderDtoes/${menu_id}?amount=${amount}`,
          
        })
        const res = await req.data
        console.log(res)
    }

    handleIncrement=()=>{
        this.setState({
            number:this.state.number+1
        })
    }

    handleDecrement=()=>{
        let number = this.state.number
        if(number == 0) return
        this.setState({
            number:this.state.number-1
        })
    }


  render() {
      const number = this.state.number
      const price = this.props.location.state.price
      const name = this.props.location.state.name
    return (
      <div>
        <h2>{name}</h2>
        {price}
        
        <button onClick={this.handleDecrement}>-</button>
        {number}
        <button onClick={this.handleIncrement}>+</button>
        <br></br>
        <h2>총 구매 금액 : {number * price}</h2>
        <h1 onClick={this.handleClick}>장바구니 담기</h1>   
      </div>
    )
  }
}
