"use client";
import React, { useEffect, useState } from "react";
import {
  AiIcons,
  BiIcons,
  IoIcons,
  SiIcons,
  FaIcons,
  GrIcons,
  PiIcons,
  RiIcons,
  CiIcons,
} from "./Icons";
import Image from "next/image";
import Loader from "../tools/Loader";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Alphabets } from "./Alphabets";
export default function Projects() {
  // const host = "http://localhost:5000";
  const host = "https://portfolio-backend-0roz.onrender.com";
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [comment, setComment] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const commentInpOnChange = (e, id) => {
    setComment(e.target.value);
    let sendBtn = document.getElementById(id);
    if (e.target.value.length > 0) {
      sendBtn.style.transform = "rotate(45deg)";
    } else {
      sendBtn.style.transform = "rotate(0deg)";
    }
  };
  const showCommentSec = (id) => {
    console.log(id);
    const commentSec = document.getElementById(id);
    commentSec.style.bottom = "0";
    commentSec.style.opacity = "1";
  };
  const hideCommentSec = (id) => {
    const commentSec = document.getElementById(id);
    commentSec.style.bottom = "-100%";
    commentSec.style.opacity = "0";
  };
  const commentOnClick = async (id) => {
    try {
      let headersList = {
        Accept: "*/*",
        "auth-token": Cookies.get("token"),
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        projectId: id,
        comment: comment,
      });

      let response = await fetch(`${host}/api/project/comment`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.json();
      if (data.success) {
      }
    } catch (error) {
      // Handle errors that may occur during the 'like' action
      console.error("Error during 'like' action:", error.message);
      // You may choose to log the error, show a user-friendly message, or take other appropriate actions
    }
  };
  const tech = [
    {
      name: "nextjs",
      icons: <SiIcons.SiNextdotjs />,
      color: "var(--color)",
    },
    {
      name: "nodejs",
      icons: <FaIcons.FaNodeJs />,
      color: "#3C873A",
    },
    {
      name: "reactjs",
      icons: <GrIcons.GrReactjs />,
      color: "#61dafb",
    },
    {
      name: "mongodb",
      icons: <BiIcons.BiLogoMongodb />,
      color: "#589636",
    },
    {
      name: "css",
      icons: <IoIcons.IoLogoCss3 />,
      color: "#264de4",
    },
    {
      name: "javascript",
      icons: <BiIcons.BiLogoJavascript />,
      color: "#F0DB4F",
    },
    {
      name: "html",
      icons: <AiIcons.AiFillHtml5 />,
      color: "#ea4335",
    },
  ];
  // Check if window is defined (client-side)
  const isClient = typeof window !== "undefined";
  let likeAudio = isClient ? new Audio("./audio/like.mp3") : null;
  let unLikeAudio = isClient ? new Audio("./audio/unlike.mp3") : null;

  const likeOnClick = async (id) => {
    try {
      // Prepare headers for the HTTP request
      const headers = {
        Accept: "*/*",
        "auth-token": Cookies.get("token"),
        "Content-Type": "application/json",
      };

      // Prepare the request body
      const body = JSON.stringify({
        productId: id,
      });

      // Perform the 'like' action by sending a POST request to the server
      await fetch(`${host}/api/project/like`, {
        method: "POST",
        body,
        headers,
      });

      // If the 'like' action is successful, you may choose to perform additional actions
      // For example, reloading the page
      // Uncomment the following lines if needed:
      // const data = await response.json();
      // if (data.success === true) {
      //   location.reload();
      // }
    } catch (error) {
      // Handle errors that may occur during the 'like' action
      console.error("Error during 'like' action:", error.message);
      // You may choose to log the error, show a user-friendly message, or take other appropriate actions
    }
  };
  const changeLike = (input, button, path, span, id) => {
    let spns = document.getElementById(span);
    let inpt = document.getElementById(input);
    let btns = document.getElementById(button);
    let svg = document.getElementById(path);
    // console.log(Number(spns.innerText));
    if (!Cookies.get("token")) {
      router.push("/login");
    } else {
      if (inpt.checked) {
        likeAudio.play();
        btns.style.color = "#FF5353";
        svg.style.fill = "#FF5353";
        svg.style.stroke = "#FF5353";
        svg.style.transition = "100ms";
        spns.innerHTML = Number(spns.innerText) + 1;
        likeOnClick(id);
      } else {
        unLikeAudio.play();
        btns.style.color = "#000000";
        svg.style.fill = "none";
        svg.style.stroke = "var(--color)";
        svg.style.transition = "100ms";
        spns.innerHTML = Number(spns.innerText) - 1;
        likeOnClick(id);
      }
    }
  };
  useEffect(() => {
    const fetchProjects = async () => {
      setLoader(true);
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/api/project/fetch`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setLoader(false);
        setData(data);
      } else {
        setLoader(false);
      }
    };
    fetchProjects();
  }, [host]);
  return (
    <section className="projects" style={{ margin: "5rem 0" }}>
      <h1 id="projectHeading">Created Projects</h1>
      <p id="projectParagraph">
        All the projects that i created using wed development technologies
      </p>
      {loader ? (
        <div className="loaderSection">
          <Loader />
        </div>
      ) : (
        <>
          <div className="titleHead">
            <h3>
              Total projects ({data.total}){" "}
              <span
                onClick={() => {
                  router.push("/project");
                }}
              >
                View all
              </span>
            </h3>
          </div>
          <div className="projectCards">
            {data.project?.slice(0, 4).map((e, index) => {
              return (
                <div
                  data-aos="fade-down-right fade-out"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="200"
                  className="card"
                  key={e._id}
                >
                  <div className="project-card-items">
                    <div className="image">
                      <Image
                        src={`${host}/projectImage/${e.image[0]}`}
                        // src={e.image}
                        alt="projectPicture"
                        layout="responsive"
                        width={200}
                        height={150}
                      />
                    </div>
                    <div className="techUsed">
                      <ul>
                        {tech.map((e, index) => {
                          return (
                            <li key={index} style={{ color: e.color }}>
                              {e.icons}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="details">
                      <h2>{e.title}</h2>
                      <p>
                        {e.description.length > 210
                          ? e.description.slice(0, 210) + "..."
                          : e.description}
                      </p>
                    </div>
                    <div className="buttons">
                      <button
                        id={index}
                        style={
                          !Cookies.get("token")
                            ? { color: "var(--color)" }
                            : Cookies.get("id") &&
                              e.likes.some(
                                (id) => id.userId === Cookies.get("id")
                              )
                            ? { color: "#FF5353" }
                            : { color: "var(--color)" }
                        }
                      >
                        <input
                          style={{ display: "none" }}
                          disabled={!Cookies.get("token")}
                          type="checkbox"
                          defaultChecked={
                            Cookies.get("id") &&
                            e.likes.some(
                              (id) => id.userId === Cookies.get("id")
                            )
                          }
                          onChange={() => {
                            changeLike(
                              `${index}input`,
                              index,
                              `${index}path`,
                              `${index}span`,
                              e._id
                            );
                          }}
                          id={`${index}input`}
                        />
                        <label htmlFor={`${index}input`} className="container">
                          <div className="checkmark">
                            <svg viewBox="0 0 256 256">
                              <rect fill="none" height="256" width="256"></rect>
                              <path
                                id={`${index}path`}
                                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                                strokeWidth="14px"
                                // stroke="var(--color)"
                                stroke={`${
                                  !Cookies.get("token")
                                    ? "var(--color)"
                                    : Cookies.get("id") &&
                                      e.likes.some(
                                        (id) => id.userId === Cookies.get("id")
                                      )
                                    ? "#FF5353"
                                    : "var(--color)"
                                }`}
                                fill={
                                  !Cookies.get("token")
                                    ? "none"
                                    : Cookies.get("id") &&
                                      e.likes.some(
                                        (id) => id.userId === Cookies.get("id")
                                      )
                                    ? "#FF5353"
                                    : "none"
                                }
                              ></path>
                            </svg>
                          </div>
                          &nbsp;
                          <span
                            style={
                              !Cookies.get("token")
                                ? { color: "var(--color)" }
                                : Cookies.get("id") &&
                                  e.likes.some(
                                    (id) => id.userId === Cookies.get("id")
                                  )
                                ? { color: "#FF5353" }
                                : { color: "var(--color)" }
                            }
                            id={`${index}span`}
                          >
                            {e.likes.length >= 1000
                              ? e.likes.length + "K"
                              : e.likes.length}
                          </span>
                        </label>
                      </button>
                      <button
                        onClick={() => {
                          showCommentSec(e._id);
                        }}
                      >
                        <span className="projectIco">
                          {/* <RiIcons.RiMessage3Line /> */}
                          <PiIcons.PiChatTeardropDotsLight />
                        </span>
                        &nbsp;
                        <span>
                          {!e.comments.length
                            ? "0"
                            : e.comments.length > 1000
                            ? e.comments.length + "K"
                            : e.comments.length}
                        </span>
                      </button>
                      <button>
                        <span className="projectIco">
                          {/* <PiIcons.PiEyeThin /> */}
                          <PiIcons.PiEyeLight />
                        </span>
                      </button>
                      <button>
                        <span className="projectIco">
                          {/* <PiIcons.PiShareFatBold /> */}
                          <PiIcons.PiShareFatLight />
                        </span>
                      </button>

                      <div className="commentSec" id={e._id}>
                        <div
                          className="line"
                          onClick={() => {
                            hideCommentSec(e._id);
                          }}
                        >
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                        <div className="secComment">
                          {!e.comments.length || e.comments.length === 0 ? (
                            <div className="noComment">
                              <div
                                className="topCommentheader"
                                style={{ marginBottom: "13rem" }}
                              >
                                <Image
                                  src="https://img.icons8.com/3d-fluency/94/love-circled.png"
                                  width="25"
                                  height="25"
                                  alt="likes"
                                  style={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    borderRadius: "0",
                                  }}
                                />
                                <h4>{e.likes.length}</h4>
                                <Image
                                  style={{
                                    marginLeft: "2rem",
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    borderRadius: "0",
                                  }}
                                  src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png"
                                  width="25"
                                  height="25"
                                  alt="comments"
                                />
                                <h4>{e.comments.length}</h4>
                              </div>
                              <Image
                                src="https://img.icons8.com/3d-fluency/94/delete-message.png"
                                width="94"
                                height="94"
                                alt="no-message"
                                style={{
                                  width: "9.4rem",
                                  height: "9.4rem",
                                  borderRadius: "0",
                                }}
                              />
                              <h2>No comments yet be a first to comment.</h2>
                            </div>
                          ) : (
                            <div
                              className="comments-list"
                              style={{ width: "100%" }}
                            >
                              <div className="topCommentheader">
                                <Image
                                  src="https://img.icons8.com/3d-fluency/94/love-circled.png"
                                  width="25"
                                  height="25"
                                  alt="likes"
                                  style={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    borderRadius: "0",
                                  }}
                                />
                                <h4>{e.likes.length}</h4>
                                <Image
                                  style={{
                                    marginLeft: "2rem",
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    borderRadius: "0",
                                  }}
                                  src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png"
                                  width="25"
                                  height="25"
                                  alt="comments"
                                />
                                <h4>{e.comments.length}</h4>
                              </div>
                              <div
                                className="mainIndividual"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "start",
                                }}
                              >
                                {e.comments?.map((com) => {
                                  return (
                                    <div className="individual" key={com._id}>
                                      <div className="image-profile">
                                        <Image
                                          src={
                                            Alphabets.map((imgs) => {
                                              if (
                                                imgs.letter ===
                                                com.commentedBy.name
                                                  .slice(0, 1)
                                                  .toLowerCase()
                                              ) {
                                                return imgs.image;
                                              }
                                              return null; // Return null for non-matching items
                                            }).filter(Boolean)[0] // Use default image URL if no match is found
                                          }
                                          width="50"
                                          height="50"
                                          alt="profile"
                                          style={{
                                            borderRadius:"50%",
                                            width: "5rem",
                                            height: "5rem",
                                            backgroundImage: `linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)`,
                                            padding: "0.5rem",
                                          }}
                                        />
                                      </div>
                                      <div className="display">
                                        <div className="main">
                                          <h1>{com.commentedBy.name}</h1>
                                          <p>{com.comment}</p>
                                        </div>
                                        <h2>{com.commentedOn}</h2>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          <div className="sendSec">
                            <form action="">
                              <input
                                onChange={(event) => {
                                  commentInpOnChange(
                                    event,
                                    `${e._id}btnNumber`
                                  );
                                }}
                                type="text"
                                value={comment}
                                disabled={!Cookies.get("token")}
                                placeholder={
                                  !Cookies.get("token")
                                    ? "Please login to comment"
                                    : "Type your comment.."
                                }
                              />
                              <button
                                style={{
                                  padding: "1rem",
                                  height: "6rem",
                                  border: "none",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontSize: "2.3rem",
                                  borderRadius: "3rem",
                                  width: "6rem",
                                  background: "#facd3d",
                                  transition: "0.2s ease",
                                  cursor: "pointer",
                                  margin: "0",
                                  color: "#000000",
                                }}
                                id={`${e._id}btnNumber`}
                                onClick={() => {
                                  !Cookies.get("token")
                                    ? router.push("/login")
                                    : commentOnClick(e._id);
                                }}
                              >
                                <RiIcons.RiSendPlaneFill />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
