"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Image from "next/image";
import Loader from "../tools/Loader";

export default function Search(props) {
  const [loader, setLoader] = useState(true);
  const [blog, setBlog] = useState({ total: 0, result: [] });
  const [code, setCode] = useState({ total: 0, result: [] });
  const [project, setProject] = useState({ total: 0, result: [] });

  const host = "https://portfolio-backend-0roz.onrender.com";
  let query = props.id;
  useEffect(() => {
    let fetchBlogs = async () => {
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/api/blog/search?q=${query}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setLoader(false);
        setBlog({ total: data.total, result: data.result });
      } else {
        setLoader(false);
        setBlog({ total: data.total, result: data.result });
      }
    };
    let fetchCode = async () => {
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/freecode/search?q=${query}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setLoader(false);
        setCode({ total: data.total, result: data.result });
      } else {
        setLoader(false);
        setCode({ total: data.total, result: data.result });
      }
    };
    let fetchProject = async () => {
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/api/project/search?q=${query}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setLoader(false);
        setProject({ total: data.total, result: data.result });
      } else {
        setLoader(false);
        setProject({ total: data.total, result: data.result });
      }
    };
    fetchBlogs();
    fetchCode();
    fetchProject();
  }, []);
  return (
    <>
      <Nav
        position="relative"
        background="#000000"
        image="https://shiridhar.com.np/logo.png"
      />

      {loader ? (
        <Loader />
      ) : (
        <section className="searchSec">
          <div className="headerTitle">
            <h1>Search Results</h1>
            <p>
              Found{" "}
              {blog.total === 0 || !blog.total ? "" : `${blog.total} blogs, `}
              {project.total === 0 || !project.total
                ? ""
                : `${project.total} Projects, `}
              {code.total === 0 || !code.total
                ? ""
                : `${code.total} Free code `}
              of&nbsp;
              <span style={{ color: "var(--btn-text-color)" }}>
                "{query}"
              </span>{" "}
            </p>
          </div>
          {blog.total === 0 ? (
            ""
          ) : (
            <div className="blogSearch searchItems">
              <h2>
                Blogs ({blog.total}) <span>View all</span>
              </h2>
              <div className="searchBlogContainer">
                {blog.result?.map((e) => {
                  return (
                    <div
                      key={e._id}
                      className="mainItemCard"
                      style={{ flex: "30rem 0 0" }}
                    >
                      <div className="cardSe">
                        <div
                          className="imageBlogSearch"
                          style={{ background: e.color }}
                        >
                          <Image
                            src={`${host}/blogImage/${e.img}`}
                            alt="blogImage"
                            width={200}
                            height={150}
                          />
                        </div>
                        <div className="details">
                          <p>Searched</p>
                          <h3>{e.title}</h3>
                          <button
                            style={{ background: e.color, color: "#ffffff" }}
                          >
                            Read more
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {project.total === 0 || !project.total ? (
            ""
          ) : (
            <div className="projectSearch searchItems">
              <h2>
                Projects ({project.total}) <span>View all</span>
              </h2>
              <div className="searchBlogContainer">
                {project.result?.map((e) => {
                  return (
                    <div
                      className="mainItemCard"
                      key={e._id}
                      style={{ flex: "30rem 0 0" }}
                    >
                      <div className="cardSe">
                        <div className="imageBlogSearch">
                          <Image
                            src={`${host}/projectImage/${e.image[0]}`}
                            alt="projectImage"
                            width={200}
                            height={150}
                          />
                        </div>
                        <div className="details">
                          <p>Searched</p>
                          <h3>{e.title}</h3>
                          <button>Source code</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {code.total === 0 ? (
            ""
          ) : (
            <div className="codeSearch searchItems">
              <h2>
                Free code ({code.total}) <span>View all</span>
              </h2>
              <div className="searchBlogContainer">
                {code.result?.map((e) => {
                  return (
                    <div
                      className="mainItemCard"
                      key={e._id}
                      style={{ flex: "30rem 0 0" }}
                    >
                      <div className="cardSe">
                        <div
                          className="imageBlogSearch"
                          style={{ background: e.color }}
                        >
                          <Image
                            src={`${host}/freeCodeImage/${e.image}`}
                            alt="codeImage"
                            width={200}
                            height={150}
                          />
                        </div>
                        <div className="details">
                          <p>Searched</p>
                          <h3>{e.title}</h3>
                          <button
                            style={{ background: e.color, color: "#ffffff" }}
                          >
                            Source code
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}
      <Footer image="https://shiridhar.com.np/secondLogo.png" />
    </>
  );
}
