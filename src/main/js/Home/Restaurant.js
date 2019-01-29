import React, { Component } from 'react'
import axios from 'axios'
import Menus from './Menus'

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
    const categoryId = this.props.location.state.categoryId
    const storeId = this.props.location.state.storeId
    return (
      <div>
        <h2>{this.props.location.state.title}</h2>
        <Menus menus={this.state.menus} categoryId={categoryId} storeId={storeId}/>
      </div>
    )
  }
}
