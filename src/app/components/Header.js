"use client";
import Image from "next/image";
import React from "react";

export default function Header() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  return (
    <header>
      <h1>PortFolio</h1>
      <Image src="/picture.png" alt="picture" width={200} height={150} />
      <div className="scroll" onClick={handleScrollDown}>
        <div className="scrolldown" style={{ color: "skyblue" }}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
