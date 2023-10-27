"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import { GrIcons, LuIcons } from "../components/Icons";
import Spinner from "../tools/Spinner";
export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const host = process.env.NEXT_PUBLIC_HOST;
  // const host = "https://calm-lime-caiman-hem.cyclic.app"
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/api/blog/fetch`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [host]);
  return (
    <>
      <Nav position="relative" background="#000000" />
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
                <option value="">Oldest First</option>
              </select>
            </div>
            {loading ? (
              <div className="cardsSecParent-loader">
                <Spinner />
              </div>
            ) : (
              <div className="cardsSecParent">
                {items.data?.map((e) => {
                  return (
                    <div className="cards" key={e._id}>
                      <div className="sec-card">
                        <div className="BlogCardImage">
                          <Image
                            src={`${host}/blogImage/${e.img}`}
                            style={{ background: e.color }}
                            alt="blogImage"
                            layout="responsive"
                            width={50}
                            height={50}
                            loading="lazy"
                          />
                        </div>
                        <div className="detailsBlogSec">
                          <h5>Latest</h5>
                          <h2>
                            {e.title.length > 52
                              ? e.title.slice(0, 52) + "..."
                              : e.title}
                          </h2>
                          <p>
                            {e.description.length > 131
                              ? e.description.slice(0, 131) + "..."
                              : e.description}
                          </p>
                          <h6 style={{ color: e.color }}>
                            <LuIcons.LuCalendarClock />
                            &nbsp;{e.publishedOn} at {e.time}
                          </h6>
                        </div>
                        <button
                          onClick={() => {
                            showBlog(e._id);
                          }}
                          style={{ background: e.color }}
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
