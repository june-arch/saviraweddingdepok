import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "../partial/subInsta/Sebaris"
import SecondRowOne from "../partial/subInsta/SecondRowOne"
import SecondRowTwo from "../partial/subInsta/SecondRowTwo"

// ReactModal.setAppElement("#root");

const ItemInstaFirstStyle = ({instaFeed}) => {

  return (
    <div>
      <div className="row">
        {instaFeed.length > 0 ? instaFeed.slice(0, 1).map((val, key) => <SecondRowOne val={val} key={key} />) : ''}
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(1, 3).map((val, key) =><SecondRowTwo val={val} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(3, 5).map((val, key) => <SecondRowTwo val={val} delay={600} key={key} />) : null}
          </div>
        </div>
      </div>
      <div className="row">
        {instaFeed.length > 0 ? instaFeed.slice(5, 9).map((val, key) => <Sebaris val={val} key={key}/> ) : '' }
      </div>
    </div>
  
  )
}
export default ItemInstaFirstStyle;
