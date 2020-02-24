import React from 'react'
import { ReactComponent as Clone } from "../assets/paper.svg"
import { ReactComponent as Video } from "../assets/video.svg"
import ItemInstaFirstStyle from "../components/api/subInsta/ItemInstaFirstStyle"
import ItemInstaSecondStyle from "../components/api/subInsta/ItemInstaSecondStyle"
import ItemInstaThirdStyle from "../components/api/subInsta/ItemInstaThirdStyle"
import ItemInstaFourthStyle from "../components/api/subInsta/ItemInstaFourthStyle"
import FormatUtils from "./FormatUtils"
import instaService from '../services//instaService'

const handleShowMore = (e,start,setStart, count, setCount, profile, nextPoint, setNextPoint, anak, setAnak, instaFeed, setInstaFeed) => {
    e.preventDefault()
    if(count === 0){
      setAnak(anak.concat({isi : <ItemInstaFirstStyle instaFeed={instaFeed.slice(start, start+9)} instaModal={instaFeed} profile={profile} start={start+9}/>}))
      setCount(1)
    }else if(count === 1){
      setAnak(anak.concat({isi : <ItemInstaSecondStyle instaFeed={instaFeed.slice(start, start+9)} instaModal={instaFeed} profile={profile} start={start+9}/>}))
      setCount(2)
    }else if(count === 2){
      setAnak(anak.concat({isi : <ItemInstaThirdStyle instaFeed={instaFeed.slice(start, start+9)} instaModal={instaFeed} profile={profile} start={start+9}/>}))
      setCount(3)
    }else if (count === 3){
      setAnak(anak.concat({isi : <ItemInstaFourthStyle instaFeed={instaFeed.slice(start, start+9)} instaModal={instaFeed} profile={profile} start={start+9}/>}))
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

const showImageInsta = (val) => {
    if(val.media_type === 'IMAGE' || val.media_type === 'CAROUSEL_ALBUM'){
        return  <img src={val.media_url} className="card-img img-fluid" alt=" " />  
    }else{
        return <img src={val.thumbnail_url} className="card-img img-fluid" alt=" " />
    }
}

const showBadgeInsta = (val) => {
    if(val.media_type === 'CAROUSEL_ALBUM'){
        return  <Clone className="pl-1 badge-icon-img" />
    }else if(val.media_type === 'VIDEO'){
        return <Video className="pl-1 badge-icon-img" />
    }
}

const showTimeElapsed = (val) =>{
    let timeElapsed = new Date(val.timestamp)
    let today = new Date()
    let elap = ((((today - timeElapsed)/1000)/60)/60)
    let elapsed = FormatUtils.getDaHaMi(elap)
    
    if (elapsed.days >= 8){
        let formatDate = FormatUtils.getMonthText(timeElapsed.toLocaleDateString())
        return formatDate
    }else if(elapsed.days >= 1 && elapsed.days < 8){
        return elapsed.days + ' Hari Yang Lalu'
    }else if(elapsed.days === 0){
        if (elapsed.hours === 0){
            return elapsed.minutes + ' Menit Yang Lalu'
        }else{
            return elapsed.hours + ' Jam Yang Lalu'
        }
    }
}

export default {showImageInsta, showBadgeInsta, showTimeElapsed, handleShowMore}