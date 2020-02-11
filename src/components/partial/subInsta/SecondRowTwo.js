import React from 'react'
import { ReactComponent as Like } from "../../../assets/like.svg";
import { ReactComponent as Comment } from "../../../assets/comment-white-oval-bubble.svg";
import { ReactComponent as Clone } from "../../../assets/paper.svg"
import { ReactComponent as Video } from "../../../assets/video.svg"
import { ReactComponent as Close } from "../../../assets/close.svg"
import { ReactComponent as InstaGrey } from "../../../assets/instagram-grey.svg"
import { ReactComponent as LikeGrey} from "../../../assets/like-grey.svg"
import { ReactComponent as CommentGrey} from "../../../assets/comment-grey.svg"
import ScrollAnimation from "react-animate-on-scroll";

const SecondRowTwo = ({val, delay, profile}) =>{
    const showImage = () => {
        if(val.media_type === 'IMAGE' || val.media_type === 'CAROUSEL_ALBUM'){
            return <img src={val.media_url} className="card-img img-fluid" alt=" " />  
        }else if (val.media_type === 'VIDEO'){
            return <img src={val.thumbnail_url} className="card-img img-fluid" alt=" " />
        }
    }
    const showBadge = () => {
        if(val.media_type === 'CAROUSEL_ALBUM'){
            return  <Clone className="pl-1 badge-icon-img" />
        }else if(val.media_type === 'VIDEO'){
            return <Video className="pl-1 badge-icon-img" />
        }
    }
    const showDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
    }
  
    const closeDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
    }

    
    const showTimeElapsed = () =>{
        let timeElapsed = new Date(val.timestamp)
        let today = new Date()
        let elap = ((((today - timeElapsed)/1000)/60)/60)
        let elapsed = SplitTime(elap)
        
        if (elapsed.days >= 8){
            let formatDate = FormatDate(timeElapsed.toLocaleDateString())
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

      const FormatDate = (date) => {
        let split = date.split("/")
        switch (split[1]) {
          case "1":
              split[1] = "Januari";
              break;
          case "2":
              split[1] = "Februari";
              break;
          case "3":
              split[1] = "Maret";
              break;
          case "4":
              split[1] = "April";
              break;
          case "5":
              split[1] = "Mei";
              break;
          case "6":
              split[1] = "Juni";
              break;
          case "7":
              split[1] = "Juli";
              break;
          case "8":
              split[1] = "Agustus";
              break;
          case "9":
              split[1] = "September";
              break;
          case "10":
              split[1] = "Oktober";
              break;
          case "11":
              split[1] = "November";
              break;
          case "12":
              split[1] = "Desember";
              break;
          default:
            split[1] = ""
        }
        return split[0]+" "+split[1]+" "+split[2]
      }
  
      const SplitTime = (numberOfHours) =>{
          let Days=Math.floor(numberOfHours/24);
          let Remainder=numberOfHours % 24;
          let Hours=Math.floor(Remainder);
          let Minutes=Math.floor(60*(Remainder-Hours));
          return({"days":Days,"hours":Hours,"minutes":Minutes})
      }
      
    let cap = val.caption.split('#')
    return (
        <div className="col-md-6 row-kanan-isi">
            <ScrollAnimation animateIn="fadeIn" delay={delay} animateOnce={true}>
                <div
                className="card"
                key={val.id}
                onClick={showDialogHandle}
                >
                    <span className="badge">{showBadge()}</span>
                   {showImage()}
                    <div className="card-img-overlay d-flex flex-column">
                        <p className="card-text my-auto text-center caption" data-key={val.id}>
                        {cap[0].length < 170 ? cap[0] : cap[0].substring(0, 170) + "...."}
                        <br />
                        <br />
                        <br />
                        <span className="card-text mx-auto">
                            <Like height="30px" width="30px" className="pl-1"/>
                            &nbsp;&nbsp;
                            {val.like_count}
                            &nbsp;&nbsp;
                            <Comment height="30px" width="30px" />
                            &nbsp;&nbsp;
                            {val.comments_count}
                        </span>
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
            <div className="dialog" id={val.id} >
              <span onClick={closeDialogHandle}><Close className="close-button"/></span>
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
                            <p className="text-title-3 my-auto pr-1 ">{val.comments_count}</p>
                            <p className=" text-title-3 my-auto ml-auto pr-1">
                                {showTimeElapsed()}
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

export default SecondRowTwo