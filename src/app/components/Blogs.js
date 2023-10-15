import React from "react";
import { BiIcons } from "./Icons";
export default function Blogs() {
  const items = [
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "https://assets.website-files.com/6344c9cef89d6f2270a38908/64148ed756708f9b82464c96_image-of-hand-holding-an-ai-face-looking-at-the-words-chatgpt-openai.webp",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "https://c1.wallpaperflare.com/preview/827/42/546/businessman-computer-professional-laptop-office-business.jpg",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "https://c1.wallpaperflare.com/preview/827/42/546/businessman-computer-professional-laptop-office-business.jpg",
    },
    {
      title:
        "How to use chatGPT like a professional and earn money using AI without hustle-CHATGPT",
      description: "",

      image:
        "https://c1.wallpaperflare.com/preview/827/42/546/businessman-computer-professional-laptop-office-business.jpg",
    },
  ];
  return (
    <section className="blogs">
      <h1>Latest Blogs</h1>
      <p>
        Feel free to peruse my latest blog for further insights. If you wish to
        explore more, simply click on the 'View All' button.
      </p>
      <div class="BlogContainer">
        {items.map((e, index) => {
          return (
            <div class="items">
              <div className="image-top">
                <img src={e.image} alt="" />
              </div>
              <p>latest</p>
              <h2>{e.title}</h2>
              <h6>Published on 2023/08/08 at 2:45PM</h6>
              <button>
                Read More&nbsp;
                <BiIcons.BiChevronRight />
              </button>
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
