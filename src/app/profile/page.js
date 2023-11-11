"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { BsIcons, BiIcons } from "../components/Icons";
import Loader from "../tools/Loader";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loader, setLoading] = useState(true);
  const host = "https://portfolio-backend-0roz.onrender.com";
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${host}/api/blog/fetch`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

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
      <Nav position="relative" background="#000000" image="./logo.png" />
      <section className="profileSec">
        <div className="mainProfileSection">
          <div className="profile-first">
            <div className="cardSec">
              <div className="photoDet">
                <Image src="./profile.png" height={150} width={200} />
                <h1>Shiridhar Khatri</h1>
                <p>sidkhatr@gmail.com</p>
              </div>
              <div className="btnss">
                <button style={{ background: "#4267B2" }}>
                  <BiIcons.BiLogOutCircle />
                  &nbsp;Logout
                </button>
                <h3>Or</h3>
                <button style={{ background: "#ff0000" }}>
                  <BsIcons.BsPersonX />
                  &nbsp;Delete account
                </button>
              </div>
            </div>
          </div>
          <div className="profile-second">
            <div className="mainCardSecond">
              <div className="cardSecProfile">
                <h2>Username</h2>
                <p>Shiridhar Khatri</p>

                <h2>Gmail</h2>
                <p>sid976@gmail.com</p>

                <h2>Gender</h2>
                <p>Male</p>

                <div className="changePw">
                  <button>Change password</button>
                </div>
              </div>
            </div>
            <div className="suggestions">
              <div className="suggestionCard">
                <h1>Suggestion Blogs</h1>
                {loader ? (
                  <div className="loader">
                    <Loader />
                  </div>
                ) : (
                  <div className="slider">
                    {items.data?.map((e) => {
                      return (
                        <div
                          onClick={() => {
                            router.push(`/blog/${e._id}`);
                          }}
                          key={e._id}
                          className="cardsSlider"
                          style={{
                            background: `${e.color} url("${host}/blogImage/${e.img}")`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            flex: "20rem 0 0",
                          }}
                        >
                          {/* <Image src="./blogImage/blog1.png" height={150} width={200} /> */}
                          <h4>{e.title}</h4>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
