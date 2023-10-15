'use client'
import React from "react";

export default function Header() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Smooth scroll behavior
    });
  };
  return (
    <header>
      <h1>PortFolio</h1>
      <img src="/picture.png" alt="picture" />
      <div className="scroll" onClick={handleScrollDown}>
        <div class="scrolldown" style={{color: "skyblue"}}>
          <div class="chevrons">
            <div class="chevrondown"></div>
            <div class="chevrondown"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
