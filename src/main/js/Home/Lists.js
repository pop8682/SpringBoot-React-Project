import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Lists.css'

export default class Lists extends Component {


  render() {
    return (
      <div className="grid">
      {this.props.category.map((item)=>{
          return(                                //it will create new function call handleClick 
          <Link to={{
            pathname:`/restaurants/${item.id}`,
            state:{title:item.title,id:item.id}
          }} key={item.id} className="store-id">
            <div className="store-row">
              <span className="row"><img src="3.jpeg" className="img"/></span>
              <span className="row"><strong>{item.name}</strong></span>
            </div>
          </Link>
          )
        })}
      </div>
    )
  }
}
