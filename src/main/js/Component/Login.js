import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    state = {
        username:'',
        password:''
    }

    handleChange = (e) => {
        let temp = {}
        temp[e.target.name]=e.target.value;
        this.setState(temp);
        console.log(this.state)
    }

    handleSubmit = async() => {
       const req = await axios({
           method:'POST',
            url:'/login',
            data:{
                username:this.state.username,
            }
        })   
       const res = req.data;
    ç
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          아이디 : <input type="text" name="username" onChange={this.handleChange}/>
          비밀번호 : <input type="password" name="password" onChange={this.handleChange}/>
          <button>로그인</button>
      </form>
    )
  }
}

