import React from "react"
import "animate.css/animate.min.css"
import Sebaris from "./Sebaris"
import SecondRowOne from "./SecondRowOne"
import SecondRowTwo from "./SecondRowTwo"

const ItemInstaFirstStyle = ({instaFeed, profile, instaModal, start}) => {

  let first = instaFeed.slice(0, 4)
  let second = instaFeed.slice(4, 5)
  let third = instaFeed.slice(5, 7)
  let fourth = instaFeed.slice(7, 9)
  return (
    <div>
      <div className="row">
        {instaFeed.length > 0 ? first.map((val, key) => <Sebaris val={val} instaModal={instaModal} idNext={instaFeed[key+1]} idBefore={instaFeed[key-1]} profile={profile} key={key}/> ) : '' }
      </div>
      <div className="row">
        {instaFeed.length > 0 ? second.map((val, key) => <SecondRowOne val={val} instaModal={instaModal} idNext={instaFeed[key+1+4]} idBefore={instaFeed[key-1+4]} profile={profile} key={key} />) : ''}
        <div className="col-md-6 row-kanan">
          <div className="row">
            {instaFeed.length > 0 ? third.map((val, key) =><SecondRowTwo val={val} instaModal={instaModal} idNext={instaFeed[key+1+5]} idBefore={instaFeed[key-1+5]} profile={profile} delay={500} key={key} />) : ''}
          </div>
          <div className="row">
            {instaFeed.length > 0 ? fourth.map((val, key) => <SecondRowTwo val={val} instaModal={instaModal} idNext={instaFeed[key+1+7]} idBefore={instaFeed[key-1+7]} profile={profile} delay={600} key={key} />) : ''}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemInstaFirstStyle;
