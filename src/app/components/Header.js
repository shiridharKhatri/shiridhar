"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsIcons } from "./Icons";
export default function Header() {
  const [darkmode, setDarkmode] = useState(false);
  const changeMode = () => {
    let body = document.body;
    body.classList.toggle("darkMode");
    if (body.classList.contains("darkMode")) {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  return (
    <header
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),url("./header.svg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>PortFolio</h1>
      <Image src="./picture.png" alt="picture" width={200} height={150} />
      <div className="scroll" onClick={handleScrollDown}>
        <div className="scrolldown" style={{ color: "skyblue" }}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
      <div className="themeSection">
        <div className="themeDisplay" onClick={changeMode}>
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
