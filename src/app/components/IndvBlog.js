"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuIcons, IoIcons, BiIcons } from "./Icons";
export default function IndvBlog(props) {
  const [items, setItems] = useState([]);
  // const host = process.env.NEXT_PUBLIC_HOST;
   const host ="https://portfolio-backend-0roz.onrender.com"
  const fetchById = async () => {
    let headersList = {
      Accept: "*/*",
    };

    let response = await fetch(`${host}/api/blog/fetch/${props.id}`, {
      method: "GET",
      headers: headersList,
    });

    let blogs = await response.json();
    setItems(blogs.blog);
  };
  useEffect(() => {
    fetchById();
  }, []);

  return (
    <>
      <section>
        <div className="backHome"><button><IoIcons.IoArrowBackCircleOutline/>&nbsp;Back</button><button><BiIcons.BiHomeAlt/></button></div>
        <div className="indBlogDesc">
          <Image
            style={{ background: items.color }}
            src={`${host}/blogImage/${items.img}`}
            alt="blogImage"
            // layout="responsive"
            width={200}
            height={150}
          />
          <div className="indBlogDetails">
            <div className="profile">
              <Image
                src="./profile.png"
                alt="blogImage"
                // layout="responsive"
                width={100}
                height={50}
              />
              <span>
                Shiridhar khatri{" "}
                <span style={{ background: items.color }} className="author">
                  Author
                </span>
              </span>
            </div>
            <h2>{items.title}</h2>
            <p style={{ color: items.color }}>
              <LuIcons.LuCalendarClock />
              &nbsp;{items.publishedOn} at {items.time}
            </p>
          </div>
        </div>
        <div className="descriptionOfBlog">
          <h1>Description:</h1>
          <p style={{ marginBottom: "2rem" }}>{items.description}</p>
          <h1>How it works</h1>
          <ul>
            {items.points?.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <h1>Conclusion</h1>
          <p>{items.conclusion}</p>
        </div>
      </section>
    </>
  );
}
