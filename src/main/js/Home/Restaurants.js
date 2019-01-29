import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Restaurants extends Component {
state = {
  restaurants:[],
  per:2,
  page:0,
  totalPages:null,
  scrolling:false
}

componentWillMount=()=>{
  this.loadRestaurant()
  this.scrollListener = window.addEventListener('scroll',(e)=>{
    this.handleScroll(e)
  })
}

loadMore = () => {
  // this.setState is async so we can use call back
  this.setState(prevState => ({
    page: prevState.page + 1,
    scrolling:true
  }), this.loadRestaurant)
}


loadRestaurant=async()=>{
  
  const {per, page, restaurants,totalPages} = this.state
  const title = this.props.location.state.title
  const req = await axios.get(`/api/storeDtoes/${title}?page=${page}`)
  const res = await req.data
  this.setState({
    restaurants:[...restaurants, ...res],
    // append res to old restaurants
    scrolling:false,
    // at this point, done with scrolling
    // totalPages: res.page.totalPages
  })
}


handleScroll =(e)=>{
  const {scrolling, totalPages, page } = this.state
  // scrolling 중이면 handle할게 없으므로
  if(scrolling) return
  // totalPage가 page보다 작으면 handle할게 없으므로
  // if(totalPages <= page) return
  // console.log("=============")
  // console.log(page)
  const lastLi = document.querySelector('div.restaurant > a:last-child')
  // 페이지 전체 높이
  const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
  // console.log(lastLi.offsetTop)      // 선택한 element top border부터 페이지 최상단까지의 높이
  // console.log(lastLi.clientHeight)   // 선택한 element border이하 높이
  // 페이지 제일 상단부터 보이는 윈도우의 최하단까지의 높이
  const pageOffset = window.pageYOffset + window.innerHeight
  // returns the pixels the current document has been scrolled from the upper left corner of the window
  // console.log(window.pageYOffset)
  // 보이는 window의 크기
  // console.log(window.innerHeight)
  // 20 pixel of bottom
  var bottomOffset = 20
  if(pageOffset > lastLiOffset - bottomOffset) this.loadMore(); 
}


  render() {
    const id=this.props.location.state.id
    
    return (
      <div className="restaurant">
        {this.state.restaurants.map((item)=>{
          return(
            <Link to={{
              pathname:`/restaurants/${id}/restaurant/${item.id}`,
              state:{title:item.title, storeId:item.id, categoryId:id}
            }} key={item.id}>
              <hr/>
              <p>{item.title}</p>
              <p>{item.state}</p>
              <hr/>
            </Link>
          )
        })}
      </div>
    )
  }
}
