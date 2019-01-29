import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

export default class MyPage extends Component {

  handleSubmit=async()=>{
    const req = await axios.post('/mypage/logout')
    const res = await req.data
    console.log(res)
  }

  render() {
    return (
      <div>
      <Link to="/mypage/register">회원가입</Link>
        <a href="/login">로그인</a>
        <form onSubmit={this.handleSubmit}>
          <button>로그아웃</button>
        </form>
      </div>
    )
  }
}

