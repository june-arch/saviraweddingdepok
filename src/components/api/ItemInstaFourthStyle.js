import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "../partial/subInsta/Sebaris"
import SecondRowOne from "../partial/subInsta/SecondRowOne"
import SecondRowTwo from "../partial/subInsta/SecondRowTwo"

// ReactModal.setAppElement("#root");

const ItemInstaFourthStyle = ({instaFeed, profile}) => {

  return (
    <div>
      <div className="row">
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(0, 2).map((val, key) =><SecondRowTwo val={val} profile={profile} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(2, 4).map((val, key) => <SecondRowTwo val={val} profile={profile} delay={600} key={key} />) : null}
          </div>
        </div>
        {instaFeed.length > 0 ? instaFeed.slice(4, 5).map((val, key) => <SecondRowOne val={val} profile={profile} key={key} />) : ''}
      </div>
      <div className="row">
        {instaFeed.length > 0 ? instaFeed.slice(5, 9).map((val, key) => <Sebaris val={val} profile={profile} key={key}/> ) : '' }
      </div>
    </div>
  
  )
}
export default ItemInstaFourthStyle
