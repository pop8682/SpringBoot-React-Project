import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import '../css/MyPage.css'

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
        <div className="mypage-login"><a href="/login"><strong>로그인</strong></a></div>
        <div className="mypage-register">
          <span>아직 회원이 아니세요?</span>
          <span><Link to="/mypage/register">회원가입</Link></span>
        </div>
        <hr/>
        <Link to="/mypage/confirmList" className="mypage-order-list"><strong>구매내역</strong></Link>
        <hr/>
      </div>
    )
  }
}

