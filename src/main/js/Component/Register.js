import React, { Component } from 'react'
import axios from 'axios'
import {Redirect } from 'react-router-dom'


export default class Register extends Component {
state = {
    name:'',
    email:'',
    password:'',
    phone:'',
    enable:'1',
    role:'ROLE_USER'
}

handleSubmit = async(e) => {
    e.preventDefault()
    const req = await axios.post("/api/userDtoes",this.state)
    const res = await req.data
    if(res !== null){
        alert(res.name + "님 반갑습니다.");
        this.props.history.push('/mypage/login')
    }
}

handleChange=(e)=>{
    let temp = {}
    temp[e.target.name]=e.target.value
    this.setState(temp)
}



  render() {
    return (
    <form onSubmit={this.handleSubmit} >
        이름 : <input name="name" type="text" onChange={this.handleChange}/>
        이메일 : <input name="email"type="text" onChange={this.handleChange}/>
        비밀번호 : <input name="password" type="text" onChange={this.handleChange}/>
        전화번호 : <input name="phone" type="text" onChange={this.handleChange}/>
        <button type="submit">회원가입</button>
    </form> 
    )
  }
}
