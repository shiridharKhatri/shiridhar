"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import { GrIcons, LuIcons } from "../components/Icons";
import { useRouter } from "next/navigation";
import Loader from "../tools/Loader";
import Spinner from "../tools/Spinner";
export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
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
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [host]);
  // console.log(blog);
  return (
    <>
      <Nav position="fixed" image="./logo.png" />
      <section>
        <div
          className="blogHead"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("./vr.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="content">
            <h5>New Blog</h5>

            <h1>
              Virtual Reality Unveiled: A Comprehensive Guide to Immersive
              Technology.
            </h1>

            <p>
              Dive into the immersive world of virtual reality (VR) as this
              guide explores the technology, applications, and transformative
              experiences that VR offers. From entertainment to education,
              uncover the boundless possibilities within this captivating
              digital real...
            </p>

            <button
              onClick={() => {
                router.push("/blog/653c9b0dc5e0c5153655a012");
                setActive(true);
              }}
            >
              {active ? <Spinner /> : "Read More"}
            </button>
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
                <Loader />
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
                            router.push(`/blog/${e._id}`);
                          }}
                          style={{ background: e.color }}
                        >
                          Read more
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
      <Footer image="./secondLogo.png" />
    </>
  );
}
