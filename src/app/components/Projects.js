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

export default function Projects() {
  // const [event, setEvent] = useState("");
  const projects = [
    {
      id: "one",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "/notebook.png",
    },
    {
      id: "two",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "/notebook.png",
    },
    {
      id: "three",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "/notebook.png",
    },
    {
      id: "four",
      name: "Shopme ecommerce website",
      shortDescription:
        "This is ecommerce website created using given technologies nextjs, nodejs, mongodb and vanilla css.",
      description: "",
      image: "/notebook.png",
    },
  ];

  const hoverImage = (id) => {
    const pregIco = document.getElementsByClassName(id);
    pregIco[0].style.opacity = "1";
    pregIco[1].style.opacity = "1";
  };
  const mouseLeft = (id) => {
    const pregIco = document.getElementsByClassName(id);
    pregIco[0].style.opacity = "0";
    pregIco[1].style.opacity = "0";
  };
  return (
    <section className="projects">
      <h1>Created Projects</h1>
      <p>All the projects that i created using wed development technologies</p>
      <div className="titleHead">
        <h3>
          Total projects (5) <span>View all</span>
        </h3>
      </div>
      <div className="projectCards">
        {projects.map((e, index) => {
          return (
            <div className="card">
              <div
                className="image"
                onMouseEnter={() => {
                  hoverImage(e.id);
                }}
                onMouseLeave={() => {
                  mouseLeft( e.id);
                }}
              >
                <div className={`btns-next-prev ${e.id}`} >
                  <button>
                    <FiIcons.FiChevronLeft />
                  </button>
                  <button>
                    <FiIcons.FiChevronRight />
                  </button>
                </div>
                <img src={e.image} alt="projectPicture" />
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
                <button>
                  More &nbsp;
                  <BiIcons.BiChevronRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="showMore">
        <button>
          Show more&nbsp;
          <BiIcons.BiChevronDown />
        </button>
      </div>
    </section>
  );
}
