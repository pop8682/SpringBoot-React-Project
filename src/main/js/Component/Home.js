import React, { Component } from 'react'
import axios from 'axios'
import Lists from '../Home/Lists'

export default class Home extends Component {
  state = {
    category:[]
  }

  componentWillMount=async()=>{
    const req = await axios.get('category.json')
    const res = req.data
    console.log(res)
    this.setState({
      category:res
    })
    console.log(this.state.category)
  }

  render() {
    
    return (
      <div>
        <Lists category={this.state.category}/>
      </div>
    )
  }
}
