import React from 'react'
import { ReactComponent as Clone } from "../assets/paper.svg"
import { ReactComponent as Video } from "../assets/video.svg"
import { ReactComponent as Close } from "../assets/close.svg"
import { ReactComponent as InstaGrey } from "../assets/instagram-grey.svg"
import { ReactComponent as LikeGrey} from "../assets/like-grey.svg"
import { ReactComponent as CommentGrey} from "../assets/comment-grey.svg"
import { ReactComponent as ArrowRight} from "../assets/arrow-right.svg"
import { ReactComponent as ArrowLeft} from "../assets/arrow-left.svg"
import FormatUtils from "./FormatUtils"

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

const showModals = (val, idNext , idBefore, profile) => {

    const closeDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
    }
  
      const rightDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
        let modalNext = document.getElementById(nextDialog)
        modalNext.classList.toggle("show-dialog")
    }
  
      const leftDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
        let modalBefore = document.getElementById(beforeDialog)
        modalBefore.classList.toggle("show-dialog")
    }

    let nextDialog = idNext !== undefined ? idNext.id : "kosong"
    let beforeDialog = idBefore !== undefined ? idBefore.id : "kosong"
    return (
        <div className="dialog" id={val.id} >
        <span onClick={closeDialogHandle}><Close className="close-button"/></span>
        <div className="container-dialog">
        {nextDialog !== "kosong" ? <span onClick={rightDialogHandle}><ArrowRight className="arrow-right-button"/></span> : ""}
        {beforeDialog !== "kosong" ? <span onClick={leftDialogHandle}><ArrowLeft className="arrow-left-button"/></span> : ""}
          <div className="dialog-content">
            <div className="row">
              <div className="col-sm-7 pr-0">
                <img src={val.media_url} className="img-fluid" alt=" "/>
              </div>
              <div className="col-sm-5 pl-0">
                <div className="d-flex align-items-center p-3">
                    <img src={profile.profile_picture_url} className="img-fluid img-profile mr-2" alt={"1"}/>
                    <h5 className="text-title-3 p-0 m-0"> {profile.username}</h5>
                    <InstaGrey height="25px" width="25px" className="pr-1 ml-auto"/>
                </div>
                <hr className="garis"/>
                <div className="parent-scroll-caption p-3">
                    <div className="d-flex">
                        <img src={profile.profile_picture_url} className="img-fluid img-profile-2 mr-2" alt={"1"}/>
                        <p className="p-0 m-0 text-left text-1"><b className="text-title-3 "> {profile.username }</b> {val.caption}</p>
                    </div>
                </div>
                <hr className="garis"/>
                <div className="bottom-right-modal pl-3 py-3 pr-2">
                    <div className="d-flex align-items-center">
                        <LikeGrey height="27px" width="27px" className="pr-1"/>
                        <p className="text-title-3 my-auto pr-1 pb-0">{val.like_count}</p>
                        <CommentGrey height="27px" width="27px" className="pr-1"/>
                        <p className="text-title-3 my-auto pr-1 pb-0">{val.comments_count}</p>
                        <p className=" text-title-3 my-auto ml-auto pr-1">
                            {showTimeElapsed(val)}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default {showImageInsta, showBadgeInsta, showTimeElapsed, showModals}