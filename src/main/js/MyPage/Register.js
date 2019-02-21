import React, { Component } from 'react'
import axios from 'axios'
import '../css/Register.css'


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
        this.props.history.push('/mypage')
        
    }
}

handleChange=(e)=>{
    let temp = {}
    temp[e.target.name]=e.target.value
    this.setState(temp)
}



  render() {
    return (
    <form onSubmit={this.handleSubmit} className="register-input">
        <div>이름</div>         
        <input name="name" type="text" onChange={this.handleChange} />
        <div>이메일</div>
        <input name="email"type="text" onChange={this.handleChange} />
        <div>비밀번호</div> 
        <input name="password" type="text" onChange={this.handleChange} />
        <div>전화번호</div>
        <input name="phone" type="text" onChange={this.handleChange} />
        <div><button type="submit" className="register-button">회원가입</button></div>
    </form> 
    )
  }
}
