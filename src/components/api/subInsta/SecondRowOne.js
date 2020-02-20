import React from 'react'
import { ReactComponent as Like } from "../../../assets/like.svg";
import { ReactComponent as Comment } from "../../../assets/comment.svg";
import ScrollAnimation from "react-animate-on-scroll";
import FunUtils from "../../../utils/FunctionUtils"

const SecondRowOne = ({val, idNext, idBefore, profile}) =>{

    const showDialogHandle = (event) => {
        event.preventDefault()
        let modal = document.getElementById(val.id)
        modal.classList.toggle("show-dialog")
    }

    let cap = val.caption.split('#')
    return(
        <div className="col-md-6 row-kiri">
            <ScrollAnimation animateIn="fadeIn" delay={400} animateOnce={true}>
                <div className="card" key={val.id}  onClick={showDialogHandle}>
                <span className="badge">{FunUtils.showBadgeInsta(val)}</span>
                    {FunUtils.showImageInsta(val)}
                    <div className="card-img-overlay d-flex flex-column">
                        <p className="card-text my-auto text-center caption" data-key={val.id}>
                        {cap[0].length < 170 ? cap[0] : cap[0].substring(0, 170) + "...."}
                        <br />
                        <br />
                        <br />
                        <span className="card-text mx-auto">
                            <Like height="30px" width="30px" className="pl-1" />
                            &nbsp;&nbsp;
                            {val.like_count}
                            &nbsp;&nbsp;
                            <Comment height="25px" width="25px" />
                            &nbsp;&nbsp;
                            {val.comments_count}
                        </span>
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
            {FunUtils.showModals(val, idNext, idBefore, profile)}
        </div>
    )
}

export default SecondRowOne