import Image from "next/image";
import React from "react";

export default function Services() {
  const services = [
    {
      name: "Web Designing",
      src: "./services/designing.png",
      color: "linear-gradient(45deg,#FB7140,#FB9951)",
    },
    {
      name: "Web Development",
      src: "./services/development.png",
      color: "linear-gradient(45deg,#239FE9,#44D5F3)",
    },
    {
      name: "E-Commerce Development",
      src: "./services/ecommerce.png",
      color: "linear-gradient(45deg,#F1467A,#FB949E)",
    },
    // {
    //   name: "Web Maintainance",
    //   src: "/services/maintainance.png",
    // },
    {
      name: "Search Engine Optimization (SEO)",
      src: "./services/seo.png",
      color: "linear-gradient(45deg,#DA1FF2,#4C15D0)",
    },
  ];
  return (
    <>
      <section className="services">
        <h1>My Services</h1>
        <p>Here is a selection of the services I offer</p>
        <div className="mainServiceBox">
          {services.map((e, index) => {
            return (
              <div
                data-aos="fade-up fade-out"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="200"
                className="cards-item"
                key={index}
                style={{ background: e.color }}
              >
                <Image
                  src={e.src}
                  alt={e.name}
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <h4>{e.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
