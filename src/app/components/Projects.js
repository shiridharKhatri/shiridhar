"use client";
import React, { useEffect, useState } from "react";
import {
  AiIcons,
  BiIcons,
  IoIcons,
  SiIcons,
  FaIcons,
  GrIcons,
  FiIcons,
} from "./Icons";
import Image from "next/image";
import Loader from "../tools/Loader";

export default function Projects() {
  // const host = "http://localhost:5000";
  const host = "https://portfolio-backend-0roz.onrender.com";
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

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
        console.log(data);
        setData(data);
      } else {
        setLoader(false);
      }
    };
    fetchProjects();
  }, [host]);
  return (
    <section className="projects">
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
              Total projects ({data.total}) <span>View all</span>
            </h3>
          </div>
          <div className="projectCards">
            {data.project?.slice(0, 4).map((e) => {
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
                    <div className="details">
                      <h2>{e.title}</h2>
                      <p>
                        {e.description.length > 216
                          ? e.description.slice(0, 216) + "..."
                          : e.description}
                      </p>
                      <div className="techUsed">
                        <ul>
                          <li>
                            <SiIcons.SiNextdotjs />
                          </li>
                          <li style={{ color: "#3C873A" }}>
                            <FaIcons.FaNodeJs />
                          </li>
                          <li style={{ color: "#61dafb" }}>
                            <GrIcons.GrReactjs />
                          </li>
                          <li style={{ color: "#589636" }}>
                            <BiIcons.BiLogoMongodb />
                          </li>
                          <li style={{ color: "#264de4" }}>
                            <IoIcons.IoLogoCss3 />
                          </li>
                          <li style={{ color: "#F0DB4F" }}>
                            <BiIcons.BiLogoJavascript />
                          </li>
                          <li style={{ color: "#ea4335" }}>
                            <AiIcons.AiFillHtml5 />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p id="currentStatus" className="hidden">
                      <span>44k likes and 23 comments</span>
                    </p>
                    <div className="buttons">
                      <button>
                        <AiIcons.AiOutlineHeart />
                        &nbsp;<span>34k</span>
                      </button>
                      <button>
                        <BiIcons.BiCommentDetail />
                        &nbsp;<span>4k</span>
                      </button>
                      <button>
                        <AiIcons.AiOutlineEye />
                        &nbsp;<span>Live</span>
                      </button>
                      <button id="moreBth">
                        <span>More</span> &nbsp;
                        <BiIcons.BiChevronRight />
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
  );
}
