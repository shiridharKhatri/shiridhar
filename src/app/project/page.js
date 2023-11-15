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
} from "../components/Icons";
import Image from "next/image";
import Loader from "../tools/Loader";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Page() {
  // const host = "http://localhost:5000";
  const host = "https://portfolio-backend-0roz.onrender.com";
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const tech = [
    {
      name: "nextjs",
      icons: <SiIcons.SiNextdotjs />,
      color: "#000000",
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
    <>
      <Nav position="relative" background="#000000" image="./logo.png" />
    <section className="projects">
      {/* <h1 id="projectHeading">Projectfeed</h1> */}
      {/* <p id="projectParagraph">
        All the projects that i created using wed development technologies
      </p> */}
      {loader ? (
        <div className="loaderSection">
          <Loader />
        </div>
      ) : (
        <>
          <div className="titleHead">
            <h3>
              Total projects ({data.total}) 
              
            </h3>
          </div>
          <div className="projectCards">
            {data.project?.map((e) => {
              return (
                <div className="card" key={e._id}>
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
                    {/* <p id="currentStatus" className="hidden">
                      <span>
                        {e.likes > 1000 ? e.likes + "K" : e.likes} likes and{" "}
                        {!e.comments.length
                          ? "0"
                          : e.comments.length > 1000
                          ? e.comments.length + "K"
                          : e.comments.length}{" "}
                        comments
                      </span>
                    </p> */}
                    <div className="buttons">
                      <button>
                        <span className="projectIco">
                          {/* <AiIcons.AiOutlineHeart /> */}
                          <CiIcons.CiHeart />
                        </span>
                        &nbsp;
                        <span>{e.likes > 1000 ? e.likes + "K" : e.likes}</span>
                      </button>
                      <button>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {/* <div className="showMore">
        <button>
          Show more&nbsp;
          <BiIcons.BiChevronDown />
        </button>
      </div> */}
    </section>
    <Footer image="./secondLogo.png" />
    </>
  );
}