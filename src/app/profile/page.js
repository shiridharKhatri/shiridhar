"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { BsIcons, BiIcons } from "../components/Icons";
import Loader from "../tools/Loader";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Alphabets } from "../components/Alphabets";
import Spinner from "../tools/Spinner";
export default function Page() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loader, setLoading] = useState(true);
  const [data, setData] = useState();
  const [image, setImage] = useState("");
  const [active, setActive] = useState({logout:false, deleteAc: false, changePw:false});
  const host = "https://portfolio-backend-0roz.onrender.com";
  const logout = () => {
    setActive({logout:true, deleteAc: false, changePw:false});
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");
    router.push('/')
    location.reload();
  };
  useEffect(() => {
    if (Cookies.get("token")) {
      Alphabets.forEach((e) => {
        if (e.letter === Cookies.get("name").slice(0, 1).toLowerCase()) {
          setImage(e.image);
        }
      });
    }
    if (!Cookies.get("token")) {
      router.push('/')
    }
  }, []);
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
    const fetchUser = async () => {
      let headersList = {
        Accept: "*/*",
        "auth-token": Cookies.get("token"),
      };

      try {
        let response = await fetch(`http://localhost:5000/auth/User/fetch`, {
          method: "GET",
          headers: headersList,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        let data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
    fetchItems();
  }, []);

  return (
    <>
      <Nav position="relative" background="#000000" image="./logo.png" />
      <section className="profileSec">
        <div className="mainProfileSection">
          <div className="profile-first">
            <div className="cardSec">
              <div className="photoDet">
                <Image src={image} height={150} width={200} />
                <h1>{data?.name || "Loading..."}</h1>
                <p>{data?.email || "Loading..."}</p>
              </div>
              <div className="btnss">
                <button style={{ background: "#4267B2" }} onClick={logout}>
                  {/*  */}
                  {active.logout === true ? (
                    <Spinner />
                  ) : (
                    <>
                      <BiIcons.BiLogOutCircle />
                      &nbsp;Logout
                    </>
                  )}
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
                <p>{data?.name || "Loading..."}</p>

                <h2>Gmail</h2>
                <p>{data?.email || "Loading..."}</p>

                <h2>Gender</h2>
                <p>{data?.gender || "Loading..."}</p>

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
