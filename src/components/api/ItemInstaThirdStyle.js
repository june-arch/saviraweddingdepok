import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "../partial/subInsta/Sebaris"
import SecondRowOne from "../partial/subInsta/SecondRowOne"
import SecondRowTwo from "../partial/subInsta/SecondRowTwo"

const ItemInstaThirdtStyle = ({instaFeed,instaModal, profile, start}) => {
  let first = instaFeed.slice(0,4)
  let second = instaFeed.slice(4,6)
  let third = instaFeed.slice(6,8)
  let fourth = instaFeed.slice(8,9)
  
  return (
    <div>
      <div className="row">
        {instaFeed.length > 0 ? first.map((val, key) => <Sebaris val={val} idNext={instaFeed[key+1]} idBefore={instaFeed[key-1]} profile={profile} key={key}/> ) : '' }
      </div>
      <div className="row">
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? second.map((val, key) =><SecondRowTwo val={val} idNext={instaFeed[key+1+4]} idBefore={instaFeed[key-1+4]} profile={profile} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? third.map((val, key) => <SecondRowTwo val={val} idNext={instaFeed[key+1+6]} idBefore={instaFeed[key-1+6]} profile={profile} delay={600} key={key} />) : null}
          </div>
        </div>
        {instaFeed.length > 0 ? fourth.map((val, key) => <SecondRowOne val={val} idNext={instaFeed[key+1+8]} idBefore={instaFeed[key-1+8]} profile={profile} key={key} />) : ''}
      </div>
    </div>
  
  )
}
export default ItemInstaThirdtStyle;
