"use client";
import React, { useEffect, useState } from "react";
import {
  FaIcons,
  IoIcons,
  TbIcons,
  FiIcons,
  Fa6Icons,
  AiIcons,
  BiIcons,
  SiIcons,
  GrIcons,
} from "./Icons";
import Image from "next/image";
import Link from "next/link";
export default function Footer(props) {
  const [datas, setData] = useState([]);
  const socialicons = [
    {
      name: "Facebook",
      color: "#4267B2",
      icon: <FaIcons.FaFacebookF />,
      link: "",
    },
    {
      name: "Instagram",
      color: "#E4405F",
      icon: <FiIcons.FiInstagram />,
      link: "",
    },
    {
      name: "Linkedin",
      color: "#0A66C2",
      icon: <FaIcons.FaLinkedinIn />,
      link: "",
    },
    {
      name: "Fiverr",
      color: "#00b22d",
      icon: <TbIcons.TbBrandFiverr />,
      link: "https://www.fiverr.com/shiridhar?public_mode=true",
    },
    {
      name: "Github",
      color: "#000000",
      icon: <FaIcons.FaGithub />,
      link: "",
    },
    {
      name: "Viber",
      color: "#7360F2",
      icon: <FaIcons.FaViber />,
      link: "viber://add?number=123456789",
    },
  ];
  const fetchRepo = async () => {
    let url = "https://api.github.com/users/shiridharKhatri/repos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchRepo();
  }, []);

  const icons = {
    nextjs: <SiIcons.SiNextdotjs />,
    nodejs: <FaIcons.FaNodeJs />,
    reactjs: <GrIcons.GrReactjs />,
    mongodb: <BiIcons.BiLogoMongodb />,
    css: <IoIcons.IoLogoCss3 />,
    javascript: <BiIcons.BiLogoJavascript />,
    html: <AiIcons.AiFillHtml5 />,
    scss: <IoIcons.IoLogoSass />,
  };
  return (
    <footer id="footerId">
      <div className="topSection">
        <div className="topLogo">
          <Image src={props.image} alt="logo" width={200} height={150} />
        </div>
        <div className="flex-disp-footer">
          <div className="secondSection item">
            <h1>Menu</h1>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="https://www.fiverr.com/shiridhar?public_mode=true" target="_blank">Hire me</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/free_code">Free code</Link>
              </li>
              <li>
                <Link href="/project">Projectfeed</Link>
              </li>
            </ul>
          </div>
          <div className="thirdSection item">
            <h1>Github Repos</h1>
            <ul>
              {datas.slice(5, 11).map((e) => {
                return (
                  <li key={e.id}>
                    <a
                      target="_blank"
                      href={`https://shiridharkhatri.github.io/${e.name}/`}
                    >
                      {e.name}
                    </a>
                    <span
                      style={{
                        backgroundColor:
                          e.language.toLowerCase() === "html" ||
                          e.language.toLowerCase() === "HTML" ||
                          e.language.toLowerCase() === "Html"
                            ? "#ea4335"
                            : e.language.toLowerCase() === "javascript" ||
                              e.language.toLowerCase() === "JAVASCRIPT" ||
                              e.language.toLowerCase() === "JavaScript"
                            ? "#F0DB4F"
                            : e.language.toLowerCase() === "scss" ||
                              e.language.toLowerCase() === "SCSS" ||
                              e.language.toLowerCase() === "Scss"
                            ? "#d56ea3"
                            : e.language.toLowerCase() === "css" ||
                              e.language.toLowerCase() === "CSS" ||
                              e.language.toLowerCase() === "Css"
                            ? "#264de4"
                            : null,
                      }}
                    >
                      {e.language.toLowerCase() === "html" ||
                      e.language.toLowerCase() === "HTML" ||
                      e.language.toLowerCase() === "Html"
                        ? icons.html
                        : e.language.toLowerCase() === "javascript" ||
                          e.language.toLowerCase() === "JAVASCRIPT" ||
                          e.language.toLowerCase() === "JavaScript"
                        ? icons.javascript
                        : e.language.toLowerCase() === "scss" ||
                          e.language.toLowerCase() === "SCSS" ||
                          e.language.toLowerCase() === "Scss"
                        ? icons.scss
                        : e.language.toLowerCase() === "css" ||
                          e.language.toLowerCase() === "CSS" ||
                          e.language.toLowerCase() === "Css"
                        ? icons.css
                        : null}
                    </span>
                  </li>
                );
              })}
              <li style={{ cursor: "pointer" }}>More</li>
            </ul>
          </div>
          <div className="fourthSection">
            <h1>Contact</h1>
            <ul>
              <li>
                <span>
                  {" "}
                  <Fa6Icons.FaLocationDot />
                </span>

                <a href="https://www.google.com/maps?q=Tutunga-15,33700,Pokhara,Nepal" target="_blank">
                  Tutunga-15, 33700
                  <br />
                  Pokhara, Nepal
                </a>
              </li>
              <li>
                <span>
                  {" "}
                  <IoIcons.IoCall />
                </span>

                <a href="tel:+9779820610923">+9779820610923</a>
              </li>
              <li>
                <span>
                  {" "}
                  <IoIcons.IoMail />
                </span>
                <a href="mailto:khatrishiridhar6@gmail.com">khatrishiridhar6@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="socialMedia">
        <ul>
          {socialicons.map((e, index) => {
            return (
              <li onClick={()=>{
                window.open(e.link, "_blank");
              }} key={index} style={{ background: e.color }}>
                {e.icon}
              </li>
            );
          })}
        </ul>
        <p>&copy; 2023 Shiridhar Khatri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
