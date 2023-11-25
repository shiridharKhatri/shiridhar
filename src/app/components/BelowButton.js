import React from "react";
import { FaIcons, BiIcons, TbIcons, FiIcons } from "./Icons";
export default function BelowButton() {
  const socialicons = [
    {
      name: "Facebook",
      color: "#4267B2",
      icon: <FaIcons.FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=61553390668688",
    },
    {
      name: "Instagram",
      color: "#E4405F",
      icon: <FiIcons.FiInstagram />,
      link: "#",
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
      link: "",
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
      link: "",
    },
  ];
  return (
    <section className="BelowButton" style={{ marginBottom: "6rem" }}>
      <ul id="socialIconsL">
        {socialicons.map((e, index) => {
          return (
            <li
              onClick={() => {
                window.open(e.link, "_blank");
              }}
              style={{ background: e.color }}
              key={index}
            >
              {e.icon}
              &nbsp;<span>{e.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
