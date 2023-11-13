"use client";
import BelowButton from "./components/BelowButton";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import BlogsHighlight from "./components/BlogsHighlight";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    let darkmode = localStorage.getItem("DarkModeOn");
    let body = document.body;
    if (darkmode === "true") {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, []);
  useEffect(() => {
    AOS.init();
    // rest of your code
  }, []);
  return (
    <>
      <Nav position="fixed" image="./logo.png" />
      <Header />
      <BelowButton />
      <Projects />
      <Expertise />
      <BlogsHighlight />
      <Services />
      <Testimonial />
      <Mail />
      <Footer image="./secondLogo.png" />
    </>
  );
}
