import React from 'react'
import { ReactComponent as Like } from "../../../assets/like.svg";
import { ReactComponent as Comment } from "../../../assets/comment-white-oval-bubble.svg";
import ScrollAnimation from "react-animate-on-scroll";
const SecondRowOne = ({val}) =>{
    
    const showImage = () => {
        if(val.media_type === 'IMAGE' || val.media_type === 'CAROUSEL_ALBUM'){
            return  <img src={val.media_url} className="card-img img-fluid" alt=" " />  
        }else{
            return <img src={val.thumbnail_url} className="card-img img-fluid" alt=" " />
        }
    }
    return(
        <div className="col-md-6 row-kiri">
            <ScrollAnimation animateIn="fadeIn" delay={400} animateOnce={true}>
                <div className="card" key={val.id}>
                    {showImage()}
                    <div className="card-img-overlay d-flex flex-column">
                        <p className="card-text my-auto text-center" data-key={val.id}>
                        <span className="card-text mx-auto">
                            <Like height="30px" width="30px" className="pl-1" />
                            &nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <Comment height="30px" width="30px" />
                            &nbsp;&nbsp;
                        </span>
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default SecondRowOne