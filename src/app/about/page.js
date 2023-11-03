"use client";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function page() {
  return (
    <>
      <Nav position="fixed" image="./logo.png" />
      <section className="aboutSection">
        <div
          className="about-header"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)),url("./about.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 id="animationText">Web developer</h1>
          <button>Go to home page</button>
          <div className="bannerNumber">
            <div className="projects itms">
              <div className="number"></div>
            </div>
            <div className="languages itms">
              <div className="number"></div>
            </div>
            <div className="review itms">
              <div className="number"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
