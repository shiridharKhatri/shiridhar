'use client'
import Nav from "../components/Nav";
import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { BiIcons, BsIcons, LuIcons, TbIcons, IoIcons } from "../components/Icons";
import Typed from "typed.js";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Web Designer.", "Programmer."],
      typeSpeed: 100,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Nav position="fixed" image="./logo.png" />
      <section className="aboutSection">
        <div
          className="about-header"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url("./header.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 id="animationText" ref={el} />
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            <BiIcons.BiHomeAlt />
          </button>
        </div>
        <div className="bannerNumber">
          <div
            className="projects itms"
            // style={{ borderRight: "0.1rem solid #445" }}
          >
            <div className="number">
              <h2>
                <BiIcons.BiGitRepoForked />
              </h2>
              <h3>Projects</h3>
              <h1>100+</h1>
            </div>
          </div>
          <div
            className="languages itms"
            // style={{ borderRight: "0.1rem solid #445" }}
          >
            <div className="number">
              <h2>
                {" "}
                <LuIcons.LuCalendarClock />
              </h2>
              <h3>Experience year</h3>
              <h1>3+</h1>
            </div>
          </div>
          <div className="review itms">
            <div className="number">
              <h2>
                <BsIcons.BsPersonBadge />
              </h2>
              <h3>Clients</h3>
              <h1>1</h1>
            </div>
          </div>
        </div>
        <div className="aboutMainSec">
          <h1>About</h1>
          <p>
            Greetings, I am Shiridhar Khatri, hailing from the beautiful nation
            of Nepal. Over the course of three years, I have delved deep into
            the realms of programming, mastering an array of languages and
            frameworks. Proficient in HTML, CSS, JavaScript, as well as ReactJS
            and NextJS for front-end development, my expertise extends to the
            back-end, where I harness the power of NodeJS and MongoDB as the
            database of choice.
          </p>
          <p>
            The culmination of my skills finds expression in a website I&apos;ve
            meticulously crafted using NextJS for the front-end and employing
            NodeJS alongside MongoDB for the back-end operations. This platform
            stands as my digital portfolio, meticulously designed to serve as a
            haven for novice learners. Here, I offer an assortment of free code
            resources, coupled with insightful blogs intended to nurture and
            guide burgeoning talents.
          </p>
          <p>
            Within this website, you&apos;ll find an assortment of sections
            meticulously crafted to cater to a diverse audience. From the
            essential login, signup, profile management, and password recovery
            features to the more engaging sections such as blogs, showcased
            projects, and a repository of free codes, the platform offers a
            holistic experience for those traversing the programming landscape.
          </p>
          <p>
            While there are premium codes available for purchase, I have ensured
            their accessibility by offering them at an affordable price point.
            In addition to the plethora of content available, the website
            facilitates direct interaction. Whether it&apos;s through Fiverr for
            project collaborations or via direct communication through messages
            and emails, I am readily available for consultations or project
            commissions.
          </p>
          <p>
            My aim is to share knowledge, empower learners, and provide valuable
            services to those seeking to embark on their programming journey.
            Whether it&apos;s through the educational resources provided on the site
            or through direct collaboration on individual projects, I am
            dedicated to fostering a supportive and resourceful community.
          </p>
          <p>
            Feel free to explore the diverse offerings on the website, engage
            with the content, and, should you require assistance or wish to
            embark on a collaborative venture, do not hesitate to reach out.
            Your feedback and potential collaborations are warmly welcomed as I
            continue to evolve and expand the platform to better serve the
            programming community.
          </p>
          <div className="aboutBelowBtn">
            <button style={{background:"#7360F2"}}><IoIcons.IoMail/>&nbsp;Message me</button>
            <button style={{background:"#00b22d"}}><TbIcons.TbBrandFiverr/>&nbsp;Hire me</button>
          </div>
        </div>
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
