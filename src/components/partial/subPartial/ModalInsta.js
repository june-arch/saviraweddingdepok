import React from 'react'
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as LikeGrey } from "../../assets/like-grey.svg";
import { ReactComponent as CommentGrey } from "../../assets/comment-grey.svg";
import { ReactComponent as InstagGrey } from "../../assets/instagram-grey.svg";
import ReactModal from "react-modal";
import ItemsCarousel from "react-items-carousel";

const ModalInsta = () => {
    // const handleOpenModal = (event) => {
    //       res.map((value, indexOfArr) => {
    //         return (
    //           <div>
    //             {value.id === event.target.attributes.getNamedItem("data-key").value
    //               ? this.setState({ index: indexOfArr, showModal: true })
    //               : 0}
    //           </div>
    //         );
    //       });
    //   }
    
    //   const handleCloseModal = () => {
    //     this.setState({ showModal: false });
    //   }
    return (
    //     <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal} className="Modal" overlayClassName="Overlay">
    //     <Close className="btn-close-modal" onClick={this.handleCloseModal} />
    //     <div className="container pt-4">
    //       <ItemsCarousel requestToChangeActive={value => this.setState({ index: value })} activeItemIndex={this.state.index} numberOfCards={1} gutter={20} leftChevron={<button>{"<"}</button>} rightChevron={<button>{">"}</button>} outsideChevron chevronWidth={60}>
    //         {respons.length > 0 ? respons.slice(start, limitSecond).map((value, index) => {
    //               let resDate = value.caption.created_time;
    //               let date = new Date(resDate * 1000);
    //               return (
    //                 <div>
    //                   <div className="row justify-content-center" key={index}>
    //                     <div className="col-11">
    //                       <div className="row insta-modal">
    //                         <div className="col-md-6 pt-3 pl-5 pr-5 pb-3">
    //                           <div className="card">
    //                             <img
    //                               src={value.images.standard_resolution.url}
    //                               className="img-fluid"
    //                               alt=" "
    //                             />
    //                           </div>
    //                         </div>
    //                         <div className="col-md-6 pt-3 pl-5 pr-5 pb-4 font-ig">
    //                           <div className="d-flex align-items-center mb-2">
    //                             <img
    //                               className="logo-user-ig mr-3"
    //                               src={value.user.profile_picture}
    //                               alt="none"
    //                               height="30px"
    //                               width="30px"
    //                             />
    //                             <div>{value.user.username}</div>
    //                             <div className="ml-auto">
    //                               <InstagGrey className="logo-ig " />
    //                             </div>
    //                           </div>
    //                           <div className="h-line mt-1" />
    //                           <div className="d-flex mt-2 align-items-center">
    //                             <div>
    //                               <LikeGrey className="logo-ig mr-2" />
    //                               {value.likes.count}
    //                               <CommentGrey className="logo-ig ml-2 mr-2" />
    //                               {value.comments.count}
    //                             </div>
    //                             <div className="ml-auto">
    //                               {date.getDay() === 0
    //                                 ? date.getHours() + "h"
    //                                 : date.getDay() + "d"}
    //                             </div>
    //                           </div>
    //                           <div className="d-flex mt-2 align-items-center">
    //                             <div>
    //                               {value.caption.from.username + " "}
    //                               {value.caption.text}
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               );
    //             })
    //           : null}
    //       </ItemsCarousel>
    //     </div>
    //   </ReactModal>
    )
}

export default ModalInsta