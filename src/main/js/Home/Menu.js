import React, { Component } from 'react'
import axios from 'axios';
import '../css/Menu.css'

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
        if(this.state.number != 0){
          const req = await axios({
            method:'POST',
            url:`/api/orderDtoes/${menu_id}?amount=${amount}`,
        })
        const res = await req.data
        alert("주문하셨습니다.")
        this.props.history.goBack();
        } else {
          alert("하나 이상 선택해주세요")
        }
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
      <div  className="menu-content">
        <div>
          <h4><strong>{name}</strong></h4>
          <p className="menu-price">{price}</p>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col menu-text"><strong>수량</strong></div>
          <div className="col menu-button">
            <button onClick={this.handleDecrement} className="btn btn-default">-</button>
            {number}
            <button onClick={this.handleIncrement} className="btn btn-default">+</button>
          </div>
        </div>
        <hr></hr>

        <div className="menu-nav">
          <strong>총 구매 금액</strong>
          <h1 className="menu-total-price">{number * price}원</h1>
          <div onClick={this.handleClick} className="menu-add-cart"><strong>장바구니 담기</strong></div>   
        </div>
      </div>
    )
  }
}
