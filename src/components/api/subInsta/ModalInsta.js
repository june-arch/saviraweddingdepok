import React from 'react'
import { ReactComponent as Close } from "../../../assets/close.svg"
import { ReactComponent as InstaGrey } from "../../../assets/instagram-grey.svg"
import { ReactComponent as LikeGrey} from "../../../assets/like-grey.svg"
import { ReactComponent as CommentGrey} from "../../../assets/comment-grey.svg"
import { ReactComponent as ArrowRight} from "../../../assets/arrow-right.svg"
import { ReactComponent as ArrowLeft} from "../../../assets/arrow-left.svg"
import { ReactComponent as Loading } from "../../../assets/loading.svg"
import FunctionUtils from "../../../utils/FunctionUtils"

const ModalInsta = ({profile, instaOne, dataAll, loadingInstaOne}) => {
   
    const closeDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById("dialog-insta")
        modal.classList.toggle("show-dialog")
    }
  
    const rightDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById("dialog-insta")
        modal.classList.toggle("show-dialog")
        
    }
  
    const leftDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById("dialog-insta")
        modal.classList.toggle("show-dialog")
        
    }
    let idNext
    let idBefore
    
    if(dataAll){
        for (let i=0; i<dataAll.length; i++){
            if(dataAll[i] !== undefined){
                if(dataAll[i].id === instaOne.id){
                    if(dataAll[i-1] !== undefined){
                        idBefore = dataAll[i-1].id
                    }
                    if(dataAll[i+1] !== undefined){
                        idNext = dataAll[i+1].id
                    }
                }
            }
        }
    
    }

    if(idNext){
        console.log(idNext, idBefore)
    }

    const isiContent = () =>{
        if(loadingInstaOne){
            return  <Loading className="loading-back-modal"/>
        }else{
            return (
            <div className="container-dialog">
            {idNext !== undefined ? <span onClick={rightDialogHandle}><ArrowRight className="arrow-right-button"/></span> : ""}
            {idBefore !== undefined ? <span onClick={leftDialogHandle}><ArrowLeft className="arrow-left-button"/></span> : ""}
              <div className="dialog-content">
                <div className="row">
                  <div className="col-sm-7 pr-0">
                    <img src={instaOne.media_url} className="img-fluid" alt=" "/>
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
                            <p className="p-0 m-0 text-left text-1"><b className="text-title-3 "> {profile.username }</b> {instaOne.caption}</p>
                        </div>
                    </div>
                    <hr className="garis"/>
                    <div className="bottom-right-modal pl-3 py-3 pr-2">
                        <div className="d-flex align-items-center">
                            <LikeGrey height="27px" width="27px" className="pr-1"/>
                            <p className="text-title-3 my-auto pr-1 pb-0">{instaOne.like_count}</p>
                            <CommentGrey height="27px" width="27px" className="pr-1"/>
                            <p className="text-title-3 my-auto pr-1 pb-0">{instaOne.comments_count}</p>
                            <p className=" text-title-3 my-auto ml-auto pr-1">
                                {FunctionUtils.showTimeElapsed(instaOne)}
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
        }
    }

    return (
        <div className="dialog" id="dialog-insta" >
            <span onClick={closeDialogHandle}><Close className="close-button"/></span>
            {isiContent()}
        </div>
    )
}

export default ModalInsta