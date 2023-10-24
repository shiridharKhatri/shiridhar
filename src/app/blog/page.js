"use client";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import { GrIcons, LuIcons } from "../components/Icons";
export default function Page() {
  const items = [
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog1.png",
      color: "#5aaef5",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog2.png",
      color: "#515568",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog3.png",
      color: "#d7c0e4",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog1.png",
      color: "#5aaef5",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog4.png",
      color: "#212325",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog4.png",
      color: "#212325",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog2.png",
      color: "#515568",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog4.png",
      color: "#212325",
    },
    {
      title: "How to use chatGPT like a professional",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae iste, aspernatur tempora nemo eum. In, repellendus libero cum debitis accusantium pariatur neque incidunt aliquam sit quidem repellat nobis corporis.",
      image: "./blogImage/blog1.png",
      color: "#5aaef5",
    },
  ];
  const fetchData = async () => {
    let headersList = {
      Accept: "*/*",
    };

    let response = await fetch("http://localhost:5000/api/blog/fetch", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    let datas = data.data.map((e) => {
      return {id : e._id}
    });
    console.log([datas][0])
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Nav position="fixed" />
      <section>
        <div
          className="blogHead"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("https://blog.vrplayin.ca/wp-content/uploads/2023/06/immersive-experience.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="content">
            <h5>New Blog</h5>
            <h1>How to create a responsive navbar without many codes</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              recusandae iste, aspernatur tempora nemo eum. In, repellendus
              libero cum debitis accusantium pariatur neque incidunt aliquam sit
              quidem repellat nobis corporis.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="allBlogsSec">
          <div className="blogCardParent">
            <div className="blogTitleHead">
              <h1>All Blogs</h1>
              <select name="" id="">
                <option value="">Newest First</option>
                <option value="">Newest First</option>
              </select>
            </div>
            <div className="cardsSecParent">
              {items.map((e, index) => {
                return (
                  <div className="cards" key={index}>
                    <div className="BlogCardImage">
                      <Image
                        src={e.image}
                        style={{ background: e.color }}
                        alt="blogImage"
                        layout="responsive"
                        width={200}
                        height={150}
                      />
                    </div>
                    <div className="detailsBlogSec">
                      <h5>Latest</h5>
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                      <h6 style={{ color: e.color }}>
                       <LuIcons.LuCalendarClock/>&nbsp;Published on 2023/08/08 at 2:45PM
                      </h6>
                    </div>
                    <button style={{ background: e.color }}>Read</button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pagePreg">
            <button id="mainBtn">
              <GrIcons.GrPrevious />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button id="mainBtn">
              <GrIcons.GrNext />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
