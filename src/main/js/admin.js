import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import update from 'react-addons-update';

export default class Admin extends Component {
  state = {
    lists:[],
    category:[],
    value:''
  }

  componentWillMount=async()=>{
    const req = await axios.get("category.json")
    const res = await req.data
    this.setState({
      category:res
    })
    console.log(this.state.category)
  }

  handleClick=async()=>{
    var store = this.state.value;
    console.log("store name : " + store)
    const req = await axios.get(store + ".json")
    const res = await req.data;
    console.log(res)

    res.forEach(i => {
      if(i.BSN_STATE_NM !== "폐업 등"){
        const list = {
          id:null,
          state:i.SIGUN_NM,
          title:i.BIZPLC_NM,
          size:i.TOT_FACLT_SCALE,
          sort:i.SANITTN_BIZCOND_NM,
          address_land:i.REFINE_LOTNO_ADDR,
          address_road:i.REFINE_ROADNM_ADDR,
          post:i.REFINE_ZIP_CD,
          latitude:i.REFINE_WGS84_LAT,
          longitude:i.REFINE_WGS84_LOGT,
          run:i.BSN_STATE_NM 
        }  
        this.setState({
          lists: update(this.state.lists, {$push:[list]})
        })
    }})
    console.log(this.state.lists)
  }     


  handleSend=async()=>{
    console.log(this.state.lists)
    var json = JSON.stringify(this.state.lists)
    const req = await axios.post('/api/storeDtoes',this.state.lists)
    const res = await req.data
  }

  handleChange=(e)=>{
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }
   

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
            <option value="">선택</option>
          {this.state.category.map(item =>{
            return(
              <option value={item.file} key={item.id}>{item.title}</option>
              )
          })}
        </select>
        <button onClick={this.handleClick}>Get Json</button>
        <button onClick={this.handleSend}>Send Json</button>
      </div>
    )
  }
}

ReactDOM.render(<Admin/>,document.getElementById('admin'))
