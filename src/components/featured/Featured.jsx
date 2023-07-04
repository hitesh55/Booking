import React from 'react'
import "./featured.css"


const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <img
        src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Mumbai</h1>
        <h2>123 properties</h2>
      </div>
    </div>
    
    <div className="featuredItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP859OsPK2yYkD6VhZ8_iPVSWzfjj4YYWYzQ&usqp=CAU"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Jaipur</h1>
        <h2>200 properties</h2>
      </div>
    </div>
    <div className="featuredItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUJx8bjs-w_bfI0ertlaYORbujLdD4YffnAmzFXJKHZ8luRDYQypi7mvKB4YXwrTyx0Q&usqp=CAU"
        alt=""
        className="featuredImg"
      />
      <div className="featuredTitles">
        <h1>Banglore</h1>
        <h2>532 properties</h2>
      </div>
    </div>
  </div>
  )
}

export default Featured