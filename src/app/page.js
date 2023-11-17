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
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
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

  const tour = () => {
    const driverObj = driver({
      overlayColor: "var(--btn-bg-color)",
      showProgress: true,
      showButtons: ["next", "previous"],
      popoverClass: "driverjs-theme-own",
      steps: [
        {
          element: "#logoFirst",
          popover: {
            title: "Logo icon",
            description:
              "The website's logo serves a dual purpose as a home navigation icon. Clicking on this distinctive logo seamlessly redirects users to the homepage, regardless of their current section. This streamlined functionality ensures a user-friendly experience and easy navigation throughout the site",
            side: "left",
            align: "start",
    
          },
        },
        {
          element: "#themeSec",
          popover: {
            title: "Theme section",
            description:
              "The theme button lets you switch between dark and light themes to suit your preference.",
            side: "top",
            align: "end",
          },
        },
        {
          element: "#socialIconsL",
          popover: {
            title: "Social links",
            description:
              "The social links provide direct access to my various social media platforms, allowing you to navigate seamlessly to my profiles with just a click.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#projectSec",
          popover: {
            title: "Projects",
            description:
              "Explore my projects section showcasing a diverse range of creations built with various cutting-edge technologies",
            side: "left",
            align: "start",
          },
        },
        {
          element: "#viewAllProject",
          popover: {
            title: "All projects",
            description:
              "Click 'View All' to explore and view all of my projects at a glance.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#techUsed",
          popover: {
            title: "Tech used",
            description:
              "These are the technologies employed in crafting this project.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#mainExpContainer",
          popover: {
            title: "Expertise",
            description:
              "These icons represent the programming languages, markup, and design languages in which I am proficient.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#freeCodeId",
          popover: {
            title: "Free code",
            description:
              "If you are an aspiring learner looking for the source code, click this button. It's designed for beginners who are eager to delve into the learning process.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#BlogContainer",
          popover: {
            title: "Read Blogs",
            description:
              "This section features the four most recent blogs I've uploaded. Click 'View All' to explore and read more insightful content.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#mainServiceBox",
          popover: {
            title: "Services",
            description:
              "Explore a comprehensive list of services that I offer.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#testimonialId",
          popover: {
            title: "Review from clients",
            description:
              "Discover insights from client reviews in this dedicated section, where they share their thoughts on my services, projects, and provide valuable suggestions when needed.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#addReviewId",
          popover: {
            title: "Add review",
            description:
              "If you wish to share your feedback, click here. Please note that you need to be logged in to leave a review.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#mailId",
          popover: {
            title: "Send mail",
            description:
              "If you have a personal message regarding business, learning, or any other matters, feel free to send me an email here. I'll promptly respond to the provided email address.",
            side: "top",
            align: "start",
          },
        },
      ],
    });
    driverObj.drive();
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = "-100%";
  };
  return (
    <>
      <Nav tour={tour} position="fixed" image="./logo.png" />
      <Header/>
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
