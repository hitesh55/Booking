import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="featuredProp">
            <div className="featuredPropItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33dSAQ0NJ89VXP_qitfgcXCLELrRTsUgx9Q&usqp=CAU" alt="" className="fpImg" />
                <span className="fpName">Geeta Hotel</span>
                <span className="fpCity">Mumbai</span>
                <span className="fpPrice">Starting from ₹800</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredPropItem">
                <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className="fpImg" />
                <span className="fpName">Meera Hotel</span>
                <span className="fpCity">Rameshwaram</span>
                <span className="fpPrice">Starting from ₹500</span>
                <div className="fpRating">
                    <button>8.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredPropItem">
                <img src="https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className="fpImg" />
                <span className="fpName">Yog Hotel</span>
                <span className="fpCity">Agra</span>
                <span className="fpPrice">Starting from ₹600</span>
                <div className="fpRating">
                    <button>7.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredPropItem">
                <img src=" https://www.ahstatic.com/photos/a5g0_ho_00_p_1024x768.jpg" alt="" className="fpImg" />
                <span className="fpName">Pink Hotel</span>
                <span className="fpCity">Jaipur</span>
                <span className="fpPrice">Starting from ₹1000</span>
                <div className="fpRating">
                    <button>7.7</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties