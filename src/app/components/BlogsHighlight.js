"use client";
import React, { useEffect, useState } from "react";
import { BiIcons, LuIcons } from "./Icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "../tools/Loader";
export default function BlogsHighlight() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // const host = process.env.NEXT_PUBLIC_HOST;
  const host = "https://portfolio-backend-0roz.onrender.com";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/api/blog/fetch`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [host]);
  return (
    <section className="blogs">
      <h1>Latest Blogs</h1>
      <p>
        Feel free to peruse my latest blog for further insights. If you wish to
        explore more, simply click on the &apos;View All&apos; button.
      </p>
      {loading ? (
        <div className="BlogContainer-loader">
          <Loader />
        </div>
      ) : (
        <div className="BlogContainer">
          {blogs.slice(-4).map((e) => {
            return (
              <div className="items" key={e._id}>
                <div className="card-item">
                  <div className="image-top">
                    <Image
                      style={{ background: e.color }}
                      src={`${host}/blogImage/${e.img}`}
                      alt="blogImage"
                      layout="responsive"
                      width={200}
                      height={150}
                      loading="lazy"
                    />
                  </div>
                  <p id="blogStatus">latest</p>
                  <h2>
                    {e.title.length > 52
                      ? e.title.slice(0, 52) + ".."
                      : e.title}
                  </h2>
                  <h6>
                    {" "}
                    <LuIcons.LuCalendarClock />
                    &nbsp;{e.publishedOn} at {e.time}
                  </h6>
                  <div className="btns-blog">
                    <button
                      onClick={() => {
                        router.push(`/blog/${e._id}`);
                      }}
                      style={{ background: e.color }}
                    >
                      Read More&nbsp;
                      <BiIcons.BiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="btn-view-all">
        <button
          className="learn-more"
          onClick={() => {
            router.push("/blog");
          }}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">View All</span>
        </button>
      </div>
    </section>
  );
}
