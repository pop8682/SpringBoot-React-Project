import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Menus.css'

export default class Menus extends Component {


  render() {
    const categoryId = this.props.categoryId
    const storeId = this.props.storeId
    return (
      <div className="menus"> 
      {this.props.menus.map((item)=>{
          return(
            <Link to={{
                pathname:`/restaurants/${categoryId}/restaurant/${storeId}/menu/${item.id}`,
                state:{id:item.id, name:item.name, price:item.price}
            }} key={item.id} >
              <p><strong>{item.name}</strong></p>
              <p className="menus-price">{item.price}</p>
              <hr></hr>
            </Link>
          )
        })}
        <br></br>
      </div>
    )
  }
}
