import React, { Component } from 'react'



export default class Menu extends Component {
    state = {
        number:0
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
    return (
      <div>
        <h2>{this.props.location.state.name}</h2>
        {this.props.location.state.price}
        <button onClick={this.handleIncrement}>+</button>
        {number}
        <button onClick={this.handleDecrement}>-</button>
        <br></br>
        <h2>총 구매 금액 : {number * price}</h2>
        
      </div>
    )
  }
}
