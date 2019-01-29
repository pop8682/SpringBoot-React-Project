import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Menus extends Component {


  render() {
    const categoryId = this.props.categoryId
    const storeId = this.props.storeId
    return (
      <div>
      {this.props.menus.map((item)=>{
          return(
            <Link to={{
                pathname:`/restaurants/${categoryId}/restaurant/${storeId}/menu/${item.id}`,
                state:{id:item.id, name:item.name, price:item.price}
            }} key={item.id} >
              <h3>{item.name}</h3>
              {item.price}
            </Link>
          )
        })}
        <br></br>
      </div>
    )
  }
}
