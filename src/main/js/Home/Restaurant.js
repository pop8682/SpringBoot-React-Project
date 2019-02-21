import React, { Component } from 'react'
import axios from 'axios'
import Menus from './Menus'
import '../css/Restaurant.css'

export default class Restaurant extends Component {
  state={
    menus:[]
  }

  componentWillMount=async()=>{
    const id = this.props.location.state.storeId
    const req = await axios.get(`/api/menuDtoes/${id}`)
    const res = await req.data
    this.setState({
      menus:res,
    })
    console.log(res)
  }

  render() {
    const {categoryId, storeId, address, latitude, longitude} = this.props.location.state
    
    return (
      <div>
        <div className="restaurant">
          <h4><strong>{this.props.location.state.title}</strong></h4>
          <p className="restaurant-address">{address}</p>
          <hr></hr>
        </div>
        <Menus menus={this.state.menus} categoryId={categoryId} storeId={storeId} className="restaurant-menu"/>
      </div>
    )
  }
}
