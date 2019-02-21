import React, { Component } from 'react'
import axios from 'axios'
import '../css/ConfirmList.css'

export default class ConfirmList extends Component {

    state = {
        menu:[],
        totalPrice:0,
        orderDate:[]
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

        const item = this.state.menu;
        for(var i = 0; i < this.state.menu.length; i++){
          if(i == 0){
            this.setState({orderDate:[item[i].dateOrder]})
          } else if(item[i-1].dateOrder != item[i].dateOrder){
            this.setState({orderDate : [...this.state.orderDate, item[i].dateOrder]})
          } 
        }
      }
    
      render() {
        return (

          <div>
            <div className="confirm">
              <h4 className="confirm-text"><strong>주문내역</strong></h4>
              <strong>총 구매 금액</strong>
              <h1 className="confirm-total-price">{this.state.totalPrice}원</h1>
              <hr></hr>
            </div>
            {this.state.orderDate.map(date =>{
              return(
                <div key={date}>
                    <div className="confirm-date"><h4><strong>{date}</strong></h4></div>
                    {this.state.menu.map(item=>{
                      if(date == item.dateOrder){
                      return(
                        <div key={item.id} className="confirm-item"> 
                          <span><strong>{item.menu.name}</strong></span>
                          <span><strong>{item.menu.price * item.amount}</strong></span>
                          <p>{item.menu.price} x {item.amount}잔</p>
                        </div>
                        )
                      }
                  })}
                </div>
              )     
            })}

                    
          </div>
        )
      }
}
