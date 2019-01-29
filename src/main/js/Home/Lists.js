import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Lists extends Component {


  render() {
    return (
      <div className="grid">
      {this.props.category.map((item)=>{
          return(                                //it will create new function call handleClick 
          <Link to={{
            pathname:`/restaurants/${item.id}`,
            state:{title:item.title,id:item.id}
          }} key={item.id}>
            <div>
              <br/>
              {item.name}
              <br/>
            </div>
          </Link>
          )
        })}
      </div>
    )
  }
}
