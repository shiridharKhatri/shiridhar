"use client";
import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Image from "next/image";
import { LuIcons } from "./Icons";
export default function IndvBlog(props) {
  // const fetchById = async () => {
  //     let headersList = {
  //       Accept: "*/*",
  //     };

  //     let response = await fetch(
  //       `http://localhost:5000/api/blog/fetch/${props.id}`,
  //       {
  //         method: "GET",
  //         headers: headersList,
  //       }
  //     );

  //     let blogs = await response.json();
  //     console.log(blogs);
  //   };
  // useEffect(()=>{
  //     fetchById();
  // },[])
  const blog = {
    title: "Exploring the Mechanics of Websites: How They Function and Operate",
    description:
      "Websites have become an integral part of our daily lives, serving as gateways to information, services, and entertainment. But how do they work, and what goes on behind the scenes when you click a link or type a URL into your browser? This article delves into the inner workings of websites, shedding light on their core components and functionality.",
    howItWorks: [
      "Domain Name System (DNS): Learn how domain names are translated into IP addresses, allowing your browser to locate websites on the internet.",
      "Web Hosting: Discover the role of web servers in storing website data and delivering it to users.",
      "Front-End and Back-End: Understand the distinction between the visible, user-facing front-end and the hidden, server-side back-end of websites.",
      "HTML, CSS, and JavaScript: Explore the fundamental languages and technologies that bring web pages to life.",
      "User Interaction: Uncover the mechanisms that enable user engagement through forms, buttons, and interactive features.",
      "Data Storage: Learn how websites store and retrieve data, from user accounts to content databases.",
      "Security Measures: Delve into the strategies and tools used to protect websites and user data from cyber threats.",
    ],
    conclusion:
      "Websites are intricate systems that combine multiple technologies and processes to provide the content and services we access daily. Understanding their operation can help you make informed decisions as a user and appreciate the complexity of the online world.",
    image: "./blogImage/blog1.png",
    color: "#5aaef5",
  };
  return (
    <>
      <Nav background="#000000" />
      <section>
        <div className="indBlogDesc">
          <Image
            style={{ background: blog.color }}
            src={blog.image}
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
                <span style={{ background: blog.color }} className="author">
                  Author
                </span>
              </span>
            </div>
            <h2>{blog.title}</h2>
            <p style={{ color: blog.color }}>
              <LuIcons.LuCalendarClock />
              &nbsp;Published on 2023/08/08 at 2:45PM
            </p>
          </div>
        </div>
        <div className="descriptionOfBlog">
          <h1>Description:</h1>
          <p style={{marginBottom:"2rem"}}>{blog.description}</p>
          <h1>How it works</h1>
          <ul>
            {blog.howItWorks.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <h1>Conclusion</h1>
          <p>{blog.conclusion}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
