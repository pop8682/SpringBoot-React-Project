import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import {Cookies} from 'js-cookie'

export default class MyPage extends Component {
  


  handleSubmit=()=>{
    const req = axios({
      method:'POST',
      url:'/logout'
    })
  }

  render() {
    return (
      <div>
        <Link to="/mypage/register">회원가입</Link>
        <a href="/login">로그인</a>
      </div>
    )
  }
}

