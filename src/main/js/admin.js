import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Admin extends Component {
  state = {
    lists:[]
  }

  handleClick=async()=>{
    const req = await axios.get("cafe.json")
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
    var json = JSON.stringify(this.state.lists)
    console.log(json)
    const req = await axios.post('/api/storeDtoes',this.state.lists)
    const res = await req.data
  }
   

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Get Json</button>
      <button onClick={this.handleSend}>Send Json</button>
      </div>
    )
  }
}

ReactDOM.render(<Admin/>,document.getElementById('admin'))
