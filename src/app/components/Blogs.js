import React from "react";
import { BiIcons } from "./Icons";
import Image from "next/image";
export default function Blogs() {
  const items = [
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "./notebook.png",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "./notebook.png",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "./notebook.png",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "./notebook.png",
    },
  ];
  return (
    <section className="blogs">
      <h1>Latest Blogs</h1>
      <p>
        Feel free to peruse my latest blog for further insights. If you wish to
        explore more, simply click on the &apos;View All&apos; button.
      </p>
      <div className="BlogContainer">
        {items.map((e, index) => {
          return (
            <div className="items" key={index}>
              <div className="image-top">
              <Image src={e.image} alt="blogImage" layout="responsive" width={200} height={150} />
              </div>
              <p id="blogStatus">latest</p>
              <h2>{e.title}</h2>
              <h6>Published on 2023/08/08 at 2:45PM</h6>
              <div className="btns-blog">
                <button>
                  Read More&nbsp;
                  <BiIcons.BiChevronRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-view-all">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">View All</span>
        </button>
      </div>
    </section>
  );
}
