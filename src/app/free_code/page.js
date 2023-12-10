"use client"
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GoIcons, AiIcons } from "../components/Icons";
import Image from "next/image";
import Loader from "../tools/Loader";
export default function Page() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const host = process.env.NEXT_PUBLIC_HOST;
  // const host = "https://portfolio-backend-0roz.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/freeCode/fetch`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setLoader(false);
        setData(data);
      }
    };
    fetchData();
  }, [host]);
  return (
    <>
      <Nav background="#000000" position="relative" image="./logo.png" />
      <section className="freeCode">
        <h1>
          <span style={{ fontFamily: `"Belanosima", sans-serif` }}>
            Free code&nbsp;
            <GoIcons.GoFileCode />
          </span>{" "}
          <span style={{ fontSize: "1.4rem" }}>Total ({data.total})</span>
        </h1>
       {loader? <div className="loaderSec">
          <Loader />
        </div>: <div className="codeSection">
          {data.codes?.map((e) => {
            return (
              <div className="codeCard" key={e._id}>
                <div className="secCodeCard">
                  <div className="imageCode" style={{ background: e.color }}>
                    <Image
                      src={`${host}/freeCodeImage/${e.image}`}
                      // src="./blogImage/blog1.png"
                      style={{ height: "100%", width: "100%" }}
                      alt="codeImage"
                      // layout="responsive"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="detailCode" style={{ width: "100%" }}>
                    <h2>{e.title}</h2>
                    <p>{e.description}</p>
                  </div>
                  <div className="btnsCode">
                    <button  onClick={()=>{window.open(e.link, "_blank")}} style={{ background: e.color }}>Source code</button>{" "}
                    <button
                    onClick={()=>{window.open(e.live, "_blank")}}
                      style={{
                        width: "4.5rem",
                        height: "4.5rem",
                        borderRadius: "50%",
                        marginLeft: "1rem",
                        fontSize: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:"transparent",
                        color: e.color,
                      }}
                    >
                      <AiIcons.AiOutlineEye />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> }
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
