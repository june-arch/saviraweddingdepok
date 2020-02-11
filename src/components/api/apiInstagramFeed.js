import React, { useState, useEffect } from "react"
import ItemInstaFirstStyle from "./ItemInstaFirstStyle"
import ItemInstaSecondStyle from "./ItemInstaSecondStyle"
import instaService from '../../services/instaService'
import ItemInstaThirdStyle from "./ItemInstaThirdStyle"
import ItemInstaFourthStyle from "./ItemInstaFourthStyle"

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
        setAnak(anak.concat({isi : <ItemInstaFirstStyle instaFeed={res.data} profile={respon} start={0}/>}))
        setNextPoint(res.paging.next)
      })
    })
    
  }

  useEffect(hook,[])

  const handelShowMore = (event) => {
    event.preventDefault()
    if(count === 0){
      setAnak(anak.concat({isi : <ItemInstaFirstStyle instaFeed={instaFeed.slice(start, start+9)} profile={profile} start={0}/>}))
      setCount(1)
    }else if(count === 1){
      setAnak(anak.concat({isi : <ItemInstaSecondStyle instaFeed={instaFeed.slice(start, start+9)} profile={profile} start={0}/>}))
      setCount(2)
    }else if(count === 2){
      setAnak(anak.concat({isi : <ItemInstaThirdStyle instaFeed={instaFeed.slice(start, start+9)} profile={profile} start={0}/>}))
      setCount(3)
    }else if (count === 3){
      setAnak(anak.concat({isi : <ItemInstaFourthStyle instaFeed={instaFeed.slice(start, start+9)} profile={profile} start={0}/>}))
      setCount(0)
    }
    let a = instaFeed.length % 9
    let b = instaFeed.length - (start + 9)
    if(a === b){
      instaService
        .getNextPage(nextPoint)
        .then(res => {
          setInstaFeed(instaFeed.concat(res.data))
          setNextPoint(res.paging.next)
        })
    }
    setStart(start+9)
  }

  const showInstaFeed = () => {
    if(instaFeed.length > 0){
      return (
        <div className="mx-auto d-block text-center">
          {anak.map((res, key) => <div key={key}>{res.isi}</div>)}
          <button className="btn btn-outline-primary btn-sm mt-2" onClick={handelShowMore}>
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
