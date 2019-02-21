import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/Restaurants.css'; 

export default class Restaurants extends Component {

state = {
  restaurants:[],
  per:2,
  page:0,
  totalPages:null,
  scrolling:false,
  select:"",
  keyword:""
}


// initial call -----------------------------------------------------

componentWillMount=()=>{
  this.loadRestaurant()
  this.scrollListener = window.addEventListener('scroll',(e)=>{
    this.handleScroll(e)
  })
}

loadRestaurant=async()=>{
  const {page, restaurants, select, keyword} = this.state
  const title = this.props.location.state.title
  const req = await axios.get(`/api/storeDtoes/${title}?select=${select}&keyword=${keyword}&page=${page}`)
  const res = await req.data
  console.log(res)
  this.setState({
    restaurants:[...restaurants, ...res],
    // append res to old restaurants
    scrolling:false,
    // at this point, done with scrolling
    // totalPages: res.page.totalPages
  })
  // console.log("after scrolling 'false' : " + this.state.scrolling)
}


handleScroll =(e)=>{
  const {scrolling, totalPages, page } = this.state
  // scrolling 중이면 handle할게 없으므로
  if(scrolling) return
  // totalPage가 page보다 작으면 handle할게 없으므로
  // if(totalPages <= page) return
  // console.log("=============")
  // console.log("scrolling : " + scrolling)
  // console.log("page : " + page)
  const lastLi = document.querySelector('div.restaurants > div:last-child')
  // 페이지 전체 높이
  if(lastLi != null){
  const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
  // console.log(lastLi.offsetTop)      // 페이지 윗 끝부터 선택한 element top border까지의 높이 (픽셀)
  // console.log(lastLi.clientHeight)   // 선택한 element 내부 높이 (픽셀)

  // 페이지 제일 상단부터 보이는 윈도우의 최하단까지의 높이
  const pageOffset = window.pageYOffset + window.innerHeight
  // returns the pixels the current document has been scrolled from the upper left corner of the window
  // console.log(window.pageYOffset)   // 왼쪽위 기준으로 스크롤이 내려온 길이 (픽셀)
  // console.log(window.innerHeight)   // element와 padding을 합친 값 (픽셀)
  // 20 pixel of bottom
  var bottomOffset = 20
  if(pageOffset > lastLiOffset - bottomOffset) {
     this.loadMore()
  }
  }
}

loadMore = () => {
  // this.setState is async so we can use call back 
  this.setState(prevState => ({
    page: prevState.page + 1,
    scrolling:true
  }), this.loadRestaurant)
  // 페이지 +1, scrolling false
  // console.log("after scrolling 'true' : " + this.state.scrolling)
}


// Search data -------------------------------------------------------------------

searchHandle=async(e)=>{
  const keyword = e.target.value
  await this.setState({
    keyword : keyword,
    restaurants:[],
    page:0
  })
  await this.loadRestaurant()
}

selectHandler=(e)=>{
  const value = e.target.value
  this.setState({
    select:value
  })
}


  render() {
    const {id, name} = this.props.location.state
    
    return (
      <div>
      <div className="row restaurants-search">
        <div>
          <select onChange={this.selectHandler} value={this.state.select} className="form-control">
            <option value="none" defaultValue>선택</option>
            <option value="title" >이름</option>
            <option value="state" >지역</option>
          </select>
        </div>
        <div className="restaurants-search-div">
          <input onChange={this.searchHandle} placeholder="검색어를 입력해주세요" className="form-control restaurants-input "/>
        </div>
      </div>
      <div className="restaurants">
        {this.state.restaurants.map((item)=>{
          return(
            <div key={item.id}>
            <Link to={{
              pathname:`/restaurants/${id}/restaurant/${item.id}`,
              state:{
                title:item.title, 
                storeId:item.id, 
                categoryId:id,
                address:item.address_land,
                latitude:item.latitude,
                longitude:item.longitude
                }
            }}  className="row restaurants-link">
              <div><img src={`../img/${name}.png`} className="restaurants-img"/></div>
              <div className="restaurants-content">
                <p><strong>{item.title}</strong></p>
                <p className="restaurants-state">{item.state}</p>
              </div>
            </Link>
            <hr/>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
