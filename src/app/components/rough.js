 // {loader ? (
      //   <div className="loaderSection">
      //     <Loader />
      //   </div>
      // ) : (
      //   <>
      //     <div className="titleHead">
      //       <h3>
      //         Total projects ({data.total}){" "}
      //         <span
      //           id="viewAllProject"
      //           onClick={() => {
      //             router.push("/project");
      //           }}
      //         >
      //           View all
      //         </span>
      //       </h3>
      //     </div>
      //     <div className="projectCards">
      //       {data.project?.slice(0, 4).map((e, index) => {
      //         return (
      //           <div
      //             data-aos="fade-down-right fade-out"
      //             data-aos-anchor-placement="top-bottom"
      //             data-aos-delay="200"
      //             className="card"
      //             key={e._id}
      //           >
      //             <div className="project-card-items">
      //               <div
      //                 className="image"
      //                 style={{
      //                   position: "relative",
      //                   userSelect: "none",
      //                   overflow: "hidden",
      //                 }}
      //                 onDoubleClick={() => {
      //                   !Cookies.get("token")
      //                     ? router.push("/login")
      //                     : likeOnDoubleClick(
      //                         `${index}likeBtn`,
      //                         `${index}heartInImage`,
      //                         `${index}input`,
      //                         index,
      //                         `${index}path`,
      //                         `${index}span`,
      //                         e._id
      //                       );
      //                 }}
      //               >
      //                 <div
      //                   className="hintsLike"
      //                   style={{
      //                     position: "absolute",
      //                     left: "0rem",
      //                     bottom: "0rem",
      //                   }}
      //                 >
      //                   <p
      //                     style={{
      //                       color: "#ffffff",
      //                       margin: "0",
      //                       width: "auto",
      //                       fontSize:"1.5rem"
      //                     }}
      //                   >
      //                     Double tap to like
      //                   </p>
      //                 </div>
      //                 <div
      //                   id={`${index}likeBtn`}
      //                   className="likeBtnImg"
      //                   style={{ position: "absolute" }}
      //                 >
      //                   <div className="heart-container" title="Like">
      //                     <input
      //                       type="checkbox"
      //                       className="checkbox"
      //                       id={`${index}heartInImage`}
      //                     />
      //                     <div className="svg-container">
      //                       <svg
      //                         viewBox="0 0 24 24"
      //                         className="svg-outline"
      //                         xmlns="http://www.w3.org/2000/svg"
      //                       >
      //                         <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
      //                       </svg>
      //                       <svg
      //                         viewBox="0 0 24 24"
      //                         className="svg-filled"
      //                         xmlns="http://www.w3.org/2000/svg"
      //                       >
      //                         <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
      //                       </svg>
      //                       <svg
      //                         className="svg-celebrate"
      //                         width="100"
      //                         height="100"
      //                         xmlns="http://www.w3.org/2000/svg"
      //                       >
      //                         <polygon points="10,10 20,20"></polygon>
      //                         <polygon points="10,50 20,50"></polygon>
      //                         <polygon points="20,80 30,70"></polygon>
      //                         <polygon points="90,10 80,20"></polygon>
      //                         <polygon points="90,50 80,50"></polygon>
      //                         <polygon points="80,80 70,70"></polygon>
      //                       </svg>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <Image
      //                   style={{ userSelect: "none" }}
      //                   src={`${host}/projectImage/${e.image[0]}`}
      //                   // src={e.image}
      //                   alt="projectPicture"
      //                   layout="responsive"
      //                   width={200}
      //                   height={150}
      //                 />
      //               </div>
      //               <div className="techUsed">
      //                 <ul id="techUsed">
      //                   {tech.map((e, index) => {
      //                     return (
      //                       <li key={index} style={{ color: e.color }}>
      //                         {e.icons}
      //                       </li>
      //                     );
      //                   })}
      //                 </ul>
      //               </div>
      //               <div className="details">
      //                 <h2>{e.title}</h2>
      //                 <p>
      //                   {e.description.length > 210
      //                     ? e.description.slice(0, 210) + "..."
      //                     : e.description}
      //                 </p>
      //               </div>
      //               <div className="buttons">
      //                 <button
      //                   id={index}
      //                   style={
      //                     !Cookies.get("token")
      //                       ? { color: "var(--color)" }
      //                       : Cookies.get("id") &&
      //                         e.likes.some(
      //                           (id) => id.userId === Cookies.get("id")
      //                         )
      //                       ? { color: "#FF5353" }
      //                       : { color: "var(--color)" }
      //                   }
      //                 >
      //                   <input
      //                     style={{ display: "none" }}
      //                     disabled={!Cookies.get("token")}
      //                     type="checkbox"
      //                     defaultChecked={
      //                       Cookies.get("id") &&
      //                       e.likes.some(
      //                         (id) => id.userId === Cookies.get("id")
      //                       )
      //                     }
      //                     onChange={() => {
      //                       changeLike(
      //                         `${index}input`,
      //                         index,
      //                         `${index}path`,
      //                         `${index}span`,
      //                         e._id
      //                       );
      //                     }}
      //                     id={`${index}input`}
      //                   />
      //                   <label htmlFor={`${index}input`} className="container">
      //                     <div className="checkmark">
      //                       <svg viewBox="0 0 256 256">
      //                         <rect fill="none" height="256" width="256"></rect>
      //                         <path
      //                           id={`${index}path`}
      //                           d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
      //                           strokeWidth="14px"
      //                           // stroke="var(--color)"
      //                           stroke={`${
      //                             !Cookies.get("token")
      //                               ? "var(--color)"
      //                               : Cookies.get("id") &&
      //                                 e.likes.some(
      //                                   (id) => id.userId === Cookies.get("id")
      //                                 )
      //                               ? "#FF5353"
      //                               : "var(--color)"
      //                           }`}
      //                           fill={
      //                             !Cookies.get("token")
      //                               ? "none"
      //                               : Cookies.get("id") &&
      //                                 e.likes.some(
      //                                   (id) => id.userId === Cookies.get("id")
      //                                 )
      //                               ? "#FF5353"
      //                               : "none"
      //                           }
      //                         ></path>
      //                       </svg>
      //                     </div>
      //                     &nbsp;
      //                     <span
      //                       style={
      //                         !Cookies.get("token")
      //                           ? { color: "var(--color)" }
      //                           : Cookies.get("id") &&
      //                             e.likes.some(
      //                               (id) => id.userId === Cookies.get("id")
      //                             )
      //                           ? { color: "#FF5353" }
      //                           : { color: "var(--color)" }
      //                       }
      //                       id={`${index}span`}
      //                     >
      //                       {e.likes.length >= 1000
      //                         ? e.likes.length + "K"
      //                         : e.likes.length}
      //                     </span>
      //                   </label>
      //                 </button>
      //                 <button
      //                   onClick={() => {
      //                     showCommentSec(e._id);
      //                   }}
      //                 >
      //                   <span className="projectIco">
      //                     {/* <RiIcons.RiMessage3Line /> */}
      //                     <PiIcons.PiChatTeardropDotsLight />
      //                   </span>
      //                   &nbsp;
      //                   <span>
      //                     {!e.comments.length
      //                       ? "0"
      //                       : e.comments.length > 1000
      //                       ? e.comments.length + "K"
      //                       : e.comments.length}
      //                   </span>
      //                 </button>
      //                 <button>
      //                   <span className="projectIco">
      //                     {/* <PiIcons.PiEyeThin /> */}
      //                     <PiIcons.PiEyeLight />
      //                   </span>
      //                 </button>
      //                 <button>
      //                   <span className="projectIco">
      //                     {/* <PiIcons.PiShareFatBold /> */}
      //                     <PiIcons.PiShareFatLight />
      //                   </span>
      //                 </button>

      //                 <div className="commentSec" id={e._id}>
      //                   <div
      //                     className="line"
      //                     onClick={() => {
      //                       hideCommentSec(e._id);
      //                     }}
      //                   >
      //                     <div className="dot"></div>
      //                     <div className="dot"></div>
      //                     <div className="dot"></div>
      //                   </div>
      //                   <div className="secComment">
      //                     {!e.comments.length || e.comments.length === 0 ? (
      //                       <div className="noComment">
      //                         <div
      //                           className="topCommentheader"
      //                           style={{ marginBottom: "13rem" }}
      //                         >
      //                           <div className="firstDiv">
      //                             <Image
      //                               src="https://img.icons8.com/3d-fluency/94/love-circled.png"
      //                               width="25"
      //                               height="25"
      //                               alt="likes"
      //                               style={{
      //                                 width: "2.5rem",
      //                                 height: "2.5rem",
      //                                 borderRadius: "0",
      //                               }}
      //                             />
      //                             <h4>{e.likes.length}</h4>
      //                             <Image
      //                               style={{
      //                                 marginLeft: "2rem",
      //                                 width: "2.5rem",
      //                                 height: "2.5rem",
      //                                 borderRadius: "0",
      //                               }}
      //                               src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png"
      //                               width="25"
      //                               height="25"
      //                               alt="comments"
      //                             />
      //                             <h4>{e.comments.length}</h4>
      //                           </div>
      //                           <div className="secondDiv">
      //                             <h1
      //                               onClick={() => {
      //                                 hideCommentSec(e._id);
      //                               }}
      //                               style={{
      //                                 color: "#46415d",
      //                                 cursor: "pointer",
      //                               }}
      //                             >
      //                               <IoIcons.IoCloseSharp />
      //                             </h1>
      //                           </div>
      //                         </div>
      //                         <Image
      //                           src="https://img.icons8.com/3d-fluency/94/delete-message.png"
      //                           width="94"
      //                           height="94"
      //                           alt="no-message"
      //                           style={{
      //                             width: "9.4rem",
      //                             height: "9.4rem",
      //                             borderRadius: "0",
      //                           }}
      //                         />
      //                         <h2>No comments yet be a first to comment.</h2>
      //                       </div>
      //                     ) : (
      //                       <div
      //                         className="comments-list"
      //                         style={{ width: "100%" }}
      //                       >
      //                         <div className="topCommentheader">
      //                           <div className="firstDiv">
      //                             <Image
      //                               src="https://img.icons8.com/3d-fluency/94/love-circled.png"
      //                               width="25"
      //                               height="25"
      //                               alt="likes"
      //                               style={{
      //                                 width: "2.5rem",
      //                                 height: "2.5rem",
      //                                 borderRadius: "0",
      //                               }}
      //                             />
      //                             <h4>{e.likes.length}</h4>
      //                             <Image
      //                               style={{
      //                                 marginLeft: "2rem",
      //                                 width: "2.5rem",
      //                                 height: "2.5rem",
      //                                 borderRadius: "0",
      //                               }}
      //                               src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png"
      //                               width="25"
      //                               height="25"
      //                               alt="comments"
      //                             />
      //                             <h4>{e.comments.length}</h4>
      //                           </div>

      //                           <div className="secondDiv">
      //                             <h1
      //                               onClick={() => {
      //                                 hideCommentSec(e._id);
      //                               }}
      //                               style={{
      //                                 color: "#46415d",
      //                                 cursor: "pointer",
      //                               }}
      //                             >
      //                               <IoIcons.IoCloseSharp />
      //                             </h1>
      //                           </div>
      //                         </div>
      //                         <div
      //                           className="mainIndividual"
      //                           style={{
      //                             display: "flex",
      //                             flexDirection: "column",
      //                             alignItems: "start",
      //                           }}
      //                         >
      //                           {e.comments?.map((com) => {
      //                             return (
      //                               <div className="individual" key={com._id}>
      //                                 <div className="image-profile">
      //                                   <Image
      //                                     src={
      //                                       Alphabets.map((imgs) => {
      //                                         if (
      //                                           imgs.letter ===
      //                                           com.commentedBy.name
      //                                             .slice(0, 1)
      //                                             .toLowerCase()
      //                                         ) {
      //                                           return imgs.image;
      //                                         }
      //                                         return null; // Return null for non-matching items
      //                                       }).filter(Boolean)[0] // Use default image URL if no match is found
      //                                     }
      //                                     width="50"
      //                                     height="50"
      //                                     alt="profile"
      //                                     style={{
      //                                       borderRadius: "50%",
      //                                       width: "5rem",
      //                                       height: "5rem",
      //                                       backgroundImage: `linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)`,
      //                                       padding: "0.5rem",
      //                                     }}
      //                                   />
      //                                 </div>
      //                                 <div className="display">
      //                                   <div className="main">
      //                                     <h1>{com.commentedBy.name}</h1>
      //                                     <p>{com.comment}</p>
      //                                   </div>
      //                                   <h2>
      //                                     {moment(com.commentedOn).fromNow()}
      //                                   </h2>
      //                                 </div>
      //                               </div>
      //                             );
      //                           })}
      //                         </div>
      //                       </div>
      //                     )}
      //                     <div className="sendSec">
      //                       <form action="">
      //                         <input
      //                           onChange={(event) => {
      //                             commentInpOnChange(
      //                               event,
      //                               `${e._id}btnNumber`
      //                             );
      //                           }}
      //                           type="text"
      //                           value={comment}
      //                           disabled={!Cookies.get("token")}
      //                           placeholder={
      //                             !Cookies.get("token")
      //                               ? "Please login to comment"
      //                               : `Comment as ${Cookies.get("name")}...`
      //                           }
      //                         />
      //                         <button
      //                           style={{
      //                             padding: "1rem",
      //                             height: "6rem",
      //                             border: "none",
      //                             display: "flex",
      //                             justifyContent: "center",
      //                             alignItems: "center",
      //                             fontSize: "2.3rem",
      //                             borderRadius: "3rem",
      //                             width: "6rem",
      //                             background: "#facd3d",
      //                             transition: "0.2s ease",
      //                             cursor: "pointer",
      //                             margin: "0",
      //                             color: "#000000",
      //                           }}
      //                           id={`${e._id}btnNumber`}
      //                           onClick={() => {
      //                             !Cookies.get("token")
      //                               ? router.push("/login")
      //                               : commentOnClick(e._id);
      //                           }}
      //                         >
      //                           <RiIcons.RiSendPlaneFill />
      //                         </button>
      //                       </form>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   </>
      // )}