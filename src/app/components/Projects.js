"use client";
import React, { useState } from "react";
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

export default function Projects() {
  // const [event, setEvent] = useState("");
  const projects = [
    {
      id: "one",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "./notebook.png",
    },
    {
      id: "two",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "./notebook.png",
    },
    {
      id: "three",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "./notebook.png",
    },
    {
      id: "four",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "./notebook.png",
    },
  ];

  return (
    <section className="projects">
      <h1 id="projectHeading">Created Projects</h1>
      <p id="projectParagraph">
        All the projects that i created using wed development technologies
      </p>
      <div className="titleHead">
        <h3>
          Total projects (5) <span>View all</span>
        </h3>
      </div>
      <div className="projectCards">
        {projects.map((e, index) => {
          return (
            <div className="card" key={index}>
              <div className="project-card-items">
                <div className="image">
                  <div className={`btns-next-prev ${e.id}`}>
                    <button>
                      <FiIcons.FiChevronLeft />
                    </button>
                    <button>
                      <FiIcons.FiChevronRight />
                    </button>
                  </div>
                  <Image
                    src={e.image}
                    alt="projectPicture"
                    layout="responsive"
                    width={200}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <h2>{e.name}</h2>
                  <p>{e.shortDescription}</p>
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

      {/* <div className="showMore">
        <button>
          Show more&nbsp;
          <BiIcons.BiChevronDown />
        </button>
      </div> */}
    </section>
  );
}
