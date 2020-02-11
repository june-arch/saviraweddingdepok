import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "../partial/subInsta/Sebaris"
import SecondRowOne from "../partial/subInsta/SecondRowOne"
import SecondRowTwo from "../partial/subInsta/SecondRowTwo"

// ReactModal.setAppElement("#root");

const ItemInstaFirstStyle = ({instaFeed, profile, start}) => {

  return (
    <div>
      <div className="row">
        {instaFeed.length > 0 ? instaFeed.slice(start, start+4).map((val, key) => <Sebaris val={val} profile={profile} key={key}/> ) : '' }
      </div>
      <div className="row">
        {instaFeed.length > 0 ? instaFeed.slice(start+4, start+5).map((val, key) => <SecondRowOne val={val} profile={profile} key={key} />) : ''}
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(start+5, start+7).map((val, key) =><SecondRowTwo val={val} profile={profile} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? instaFeed.slice(start+7, start+9).map((val, key) => <SecondRowTwo val={val} profile={profile} delay={600} key={key} />) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemInstaFirstStyle;
