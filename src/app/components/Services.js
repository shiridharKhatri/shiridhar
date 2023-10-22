import Image from "next/image";
import React from "react";

export default function Services() {
  const services = [
    {
      name: "Web Designing",
      src: "./services/designing.png",
    },
    {
      name: "Web Development",
      src: "./services/development.png",
    },
    {
      name: "E-Commerce Development",
      src: "./services/ecommerce.png",
    },
    // {
    //   name: "Web Maintainance",
    //   src: "/services/maintainance.png",
    // },
    {
      name: "Search Engine Optimization (SEO)",
      src: "./services/seo.png",
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
              <div className="cards-item" key={index}>
                <Image src={e.src} alt={e.name} width={200} height={200} />
                <h4>{e.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
