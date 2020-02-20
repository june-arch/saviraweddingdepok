import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "./Sebaris"
import SecondRowOne from "./SecondRowOne"
import SecondRowTwo from "./SecondRowTwo"

const ItemInstaFirstStyle = ({instaFeed, profile, instaModal, start}) => {
  let first = instaFeed.slice(0,1)
  let second = instaFeed.slice(1,3)
  let third = instaFeed.slice(3,5)
  let fourth = instaFeed.slice(5,9)
  
  return (
    <div>
      <div className="row">
        {instaFeed.length > 0 ? first.map((val, key) => <SecondRowOne val={val} idNext={instaFeed[key+1]} idBefore={instaFeed[key-1]} profile={profile} key={key} />) : ''}
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? second.map((val, key) =><SecondRowTwo val={val} idNext={instaFeed[key+1+1]} idBefore={instaFeed[key-1+1]} profile={profile} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? third.map((val, key) => <SecondRowTwo val={val} idNext={instaFeed[key+1+3]} idBefore={instaFeed[key-1+3]} profile={profile} delay={600} key={key} />) : null}
          </div>
        </div>
      </div>
      <div className="row">
        {instaFeed.length > 0 ? fourth.map((val, key) => <Sebaris val={val} idNext={instaFeed[key+1+5]} idBefore={instaFeed[key-1+5]} profile={profile} key={key}/> ) : '' }
      </div>
    </div>
  
  )
}
export default ItemInstaFirstStyle;
