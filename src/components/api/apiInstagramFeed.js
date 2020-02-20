import React, { useState, useEffect } from "react"
import ItemInstaFirstStyle from "./subInsta/ItemInstaFirstStyle"
import instaService from '../../services/instaService'
import FunctionUtils from "../../utils/FunctionUtils"

const ApiInstagramFeed = () => {
  const [instaFeed, setInstaFeed] = useState([])
  const [anak, setAnak] = useState([])
  const [start, setStart] = useState(9)
  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState({})
  const [nextPoint, setNextPoint] = useState('')

  const hook = () => {
    instaService.getProfile().then(respon => {
      setProfile(respon)
      instaService.getAllMedia().then(res => {
        setInstaFeed(res.data)
        setAnak(anak.concat({isi : <ItemInstaFirstStyle instaFeed={res.data} profile={respon} instaModal={res.data} start={0}/>}))
        setNextPoint(res.paging.next)
      })
    })
  }

  useEffect(hook,[])

  const showInstaFeed = () => {
    if(instaFeed.length > 0){
      return (
        <div className="mx-auto d-block text-center">
          {anak.map((res, key) => <div key={key}>{res.isi}</div>)}
          <button className="btn btn-outline-primary btn-sm mt-2" onClick={(e) => FunctionUtils.handleShowMore(e,start,setStart, count, setCount, profile, nextPoint, setNextPoint, anak, setAnak, instaFeed, setInstaFeed)}>
            Show More
          </button>
        </div>
        )
    }else{
      return <div></div>
    }
  }
  
  return (
    <div>
      <div className="row">
        {showInstaFeed()}
      </div>
    </div>
  )
}

export default ApiInstagramFeed;
