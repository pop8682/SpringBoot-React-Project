import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/store">찜한가게</NavLink>
      <NavLink to="/order">주문내역</NavLink>
      <NavLink to="/mypage">마이페이지</NavLink>
    </div>
  )
}
