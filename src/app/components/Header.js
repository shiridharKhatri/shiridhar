"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsIcons } from "./Icons";
export default function Header(props) {
  const [darkmode, setDarkmode] = useState(false);
  const changeMode = () => {
    let body = document.body;
    body.classList.toggle("darkMode");
    if (body.classList.contains("darkMode")) {
      setDarkmode(true);
      localStorage.setItem("DarkModeOn", "true"); // Set a key-value pair
    } else {
      setDarkmode(false);
      localStorage.removeItem("DarkModeOn"); // Remove the key
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  useEffect(()=>{
    let body = document.body;
    let darkmode = localStorage.getItem('DarkModeOn');
    if(darkmode === "true"){
      setDarkmode(true);
      body.classList.add("darkMode");
    }else{
      setDarkmode(false);
      body.classList.remove("darkMode");
    }
   },[])
  return (
    <header
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),url("./header.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="headerId"
    >
      <h1>Shiridhar</h1>
      <Image
        src="./picture.png"
        alt="picture"
        width={200}
        height={150}
        priority={true}
      />
      <div className="scroll" onClick={handleScrollDown}>
        <div className="scrolldown" style={{ color: "skyblue" }}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
      <div className="themeSection">
        <div className="themeDisplay" onClick={changeMode} id="themeSec">
          {darkmode === true ? (
            <h2 style={{ marginRight: "0.5rem" }}>
              <BsIcons.BsMoonStarsFill />
            </h2>
          ) : (
            <h2 style={{ marginRight: "0.5rem" }}>
              <BsIcons.BsFillSunFill />
            </h2>
          )}
          {darkmode === true ? <h2>Dark Mode</h2> : <h2>Light Mode</h2>}
        </div>
      </div>
    </header>
  );
}
