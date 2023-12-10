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
  const host = process.env.NEXT_PUBLIC_HOST;
  // const host = "https://portfolio-backend-0roz.onrender.com";
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
      <div className="topH">
        <h2>BLOGS</h2>
        <h1 id="projectHeading">Latest Blogs</h1>
      </div>
      {loading ? (
        <div className="BlogContainer-loader">
          <Loader />
        </div>
      ) : (
        <div className="BlogContainer" id="BlogContainer">
          {blogs.slice(-4).map((e) => {
            return (
              <div
                data-aos="fade-down fade-out"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="200"
                className="items"
                key={e._id}
              >
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
                  <p style={{ width: "9rem" }} id="blogStatus">
                    latest
                  </p>
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
      <div
        className="courses"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(./course.png)`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
      >
        <h1 style={{color:"#f7cd46", fontSize:"4rem"}}>Free Courses</h1>
        <p style={{color:"rgba(238, 235, 255, 0.9)"}}>
          If you are a beginner learner you can download pdf of various courses
          for free
        </p>
      </div>
    </section>
  );
}
