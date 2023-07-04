import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwqILz8abswI7eax2pTVP2PBCnUTYqY9ptw&usqp=CAU" alt=""  className="pListImg"/>
            <div className="pListTitles">
                <h1> Hotels </h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQry4USNtjMTCwDxdmQ8TPG095vbQ8fPZQHZw&usqp=CAU" alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1> Apartments </h1>
                <h2>673 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EzBDm9SuzaQf__eB898PKaW17j_n_J9Wfw&usqp=CAU" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1> Resorts </h1>
                <h2>453 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhP80W6PQqlj7BBjBM-qH-T2j55VVHF8XUA&usqp=CAU" alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1> Villas </h1>
                <h2>7564 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1> Cabins </h1>
                <h2>789 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList