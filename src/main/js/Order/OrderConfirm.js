import React, { Component } from 'react'

export default class OrderConfirm extends Component {
  render() {
    return (
      <div>
        {this.props.location.state.totalPrice}
        <a href="/payment">구매확정</a>
      </div>
    )
  }
}
