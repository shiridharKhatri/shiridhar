"use client";
import React from "react";
import { AiIcons, BiIcons, IoIcons, SiIcons, FaIcons, GrIcons } from "./Icons";
export default function Expertise() {
  const content = [
    {
      icon: <SiIcons.SiNextdotjs />,
      name: "Nextjs",
      color: "#000000",
      discription: "",
      link: "https://nextjs.org/",
    },
    {
      icon: <FaIcons.FaNodeJs />,
      name: "Nodejs",
      color: "#3C873A",
      discription: "",
      link: "https://nodejs.org/en",
    },
    {
      icon: <GrIcons.GrReactjs />,
      name: "Reactjs",
      color: "#61dafb",
      discription: "",
      link: "https://react.dev/",
    },
    {
      icon: <BiIcons.BiLogoMongodb />,
      name: "MongoDB",
      color: "#589636",
      discription: "",
      link: "https://www.mongodb.com/",
    },
    {
      icon: <IoIcons.IoLogoCss3 />,
      name: "CSS",
      color: "#264de4",
      discription: "",
      link: "",
    },
    {
      icon: <BiIcons.BiLogoJavascript />,
      name: "JavaScript",
      color: "#F0DB4F",
      discription: "",
      link: "",
    },
    {
      icon: <AiIcons.AiFillHtml5 />,
      name: "HTML",
      color: "#ea4335",
      discription: "",
      link: "",
    },
  ];
  function openNewWindow(link) {
    window.open(link, "_blank");
  }
  return (
    <section className="expertise">
      <h1 className="head">My Expertise</h1>
      <p className="paragraph">
        I possess expertise in the following technologies.
      </p>
      <div className="mainContent">
        {content.map((e, index) => {
          return (
            <div
              className="contentCard"
              style={{ background: e.color }}
              onClick={() => openNewWindow(e.link)}
              key={index}
            >
              <h1 style={{ color: "#ffffff" }}>{e.icon}</h1>
              <h3>{e.name}</h3>
            </div>
          );
        })}
      </div>
      <div
        className="banner"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(./banner.png)`,
        }}
      >
        <h1>Get free source code here</h1>
        <h3>
          I am serving free codes for beginner learners in my github you can
          check it out!
        </h3>

        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Get Code</span>
        </button>
      </div>
    </section>
  );
}
