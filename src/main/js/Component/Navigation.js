import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Navigation.css';

export default function Navigation() {
  return (
	
    <nav className="navbar navbar-expand-lg navbar-light navbar-bottom">
    	<div>
    	<ul className="navbar-nav" id="nav">
        <li className="nav-item">
         <NavLink to="/" className="nav-link">
            <span className="menu-icon fa fa-home row nav-icon"></span>
            <span className="row nav-text">홈</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/store" className="nav-link">
            <span className="menu-icon far fa-bookmark row nav-icon"></span>
            <span className="row nav-text">찜한가게</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/order" className="nav-link"> 
          <span className="menu-icon fas fa-shopping-cart row nav-icon"></span>
            <span className="row nav-text">주문내역</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mypage" className="nav-link">
          <span className="menu-icon far fa-user row nav-icon"></span>
            <span className="row nav-text">마이페이지</span>
            </NavLink>
        </li>  
        </ul>
      </div>
  </nav>
  
  )

}
