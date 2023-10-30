"use client";
import { useEffect, useState } from "react";
import {
  AiIcons,
  MdIcons,
  HiIcons,
  BiIcons,
  FaIcons,
  BsIcons,
  IoIcons,
} from "./Icons";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Alphabets } from "./Alphabets";
import Spinner from "../tools/Spinner";
export default function Testimonial() {
  const [profile, setProfile] = useState("Choose profile");
  const [image, setProfileImage] = useState();
  const [imgs, setImage] = useState("");
  const [formImage, setFormImage] = useState();
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const reviewOnChange = (e) => {
    setReviewText(e.target.value);
  };
  const reviews = [
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Ken kaneki",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Krishima touka",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "./profile.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const showReviewForm = () => {
    let reviewForm = document.getElementById("reviewForm");
    reviewForm.style.display = "flex";
  };
  const closeReviewForm = () => {
    let reviewForm = document.getElementById("reviewForm");
    reviewForm.style.display = "none";
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  let host = "http://localhost:5000";
  const currentReview = reviews[currentIndex];
  const chooseUserOnClick = () => {
    let chooseUser = document.getElementById("chooseUser");
    chooseUser.classList.toggle("toggledUser");
    let profileUl = document.getElementById("profileUl");
    if (chooseUser.classList.contains("toggledUser")) {
      profileUl.style.display = "flex";
    } else {
      profileUl.style.display = "none";
    }
  };
  const getStarsValueOnChange = (e) => {
    setStars(Number(e.target.id));
  };
  const handleProfileClick = (profile) => {
    setProfile(profile);
  };
  const profileOnCHange = (e) => {
    // let image = document.getElementById("profile-img-select");
    let profileImage = URL.createObjectURL(e.target.files[0]);
    setProfileImage(profileImage);
    setFormImage(e.target.files[0]);
  };
  const sumbitReview = async () => {
    setLoader(true);
    try {
      let headersList = {
        Accept: "*/*",
        "auth-token": Cookies.get("token"),
      };

      let bodyContent = new FormData();
      bodyContent.append("review", reviewText);
      bodyContent.append("display_name", profile);
      bodyContent.append("star", stars);
      bodyContent.append("review-img", formImage);

      let response = await fetch(`${host}/api/review/postReview`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      if (response.ok) {
        let data = await response.json();
        if (data.success === true) {
          setSuccess(true);
          setLoader(false);
        } else {
          setSuccess(false);
          setLoader(false);
        }
      } else {
        console.error("Error:", response.status);
        // Handle error cases here, if needed
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle other errors, if needed
    }
  };

  useEffect(() => {
    let name = Cookies.get("name");
    if (Cookies.get("token")) {
      Alphabets.forEach((e) => {
        if (e.letter === name.slice(0, 1).toLowerCase()) {
          setImage(e.image);
        }
      });
    }
  }, []);
  return (
    <>
      <section
        className="testimonial"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./review.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {success ? (
          <div className="postReviewSection" id="reviewForm">
            <div className="secPostRev">
              <div className="close-review" style={{ position: "absolute" }}>
                <h1>
                  <IoIcons.IoCloseSharp />
                </h1>
              </div>
              <Image
                style={{ height: "16rem", width: "16rem" }}
                id="profile-img-select"
                src="./success.png"
                alt="demo"
                width={200}
                height={150}
                loading="lazy"
              />
              <h3>Thank you.</h3>
              <p>
                Your valuable feedback is greatly appreciated. Thank you for
                taking the time to share your thoughts and insights, as they are
                instrumental in our continuous improvement and growth.
              </p>
              <button
                onClick={() => {
                  router.push("/");
                }}
                style={{ background: "#009b0b" }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="postReviewSection" id="reviewForm">
            <div className="secPostRev">
              <div
                onClick={closeReviewForm}
                className="close-review"
                style={{ position: "absolute" }}
              >
                <h1>
                  <IoIcons.IoCloseSharp />
                </h1>
              </div>
              <div className="imageSection">
                <label htmlFor="profile-photo">
                  <Image
                    style={
                      profile === "Annonymous"
                        ? { background: "#e3cc0f", cursor: "not-allowed" }
                        : { background: "#e3cc0f", cursor: "pointer" }
                    }
                    id="profile-img-select"
                    // src="./anonymous.png"
                    src={
                      profile === "Annonymous"
                        ? "./anonymous.png"
                        : profile === "Choose profile"
                        ? "./anonymous.png"
                        : !image
                        ? imgs
                        : image
                    }
                    alt="demo"
                    width={200}
                    height={150}
                    loading="lazy"
                  />
                </label>
                <input
                  disabled={profile === "Annonymous"}
                  onChange={(e) => profileOnCHange(e)}
                  type="file"
                  name="profile-photo"
                  id="profile-photo"
                  style={{ display: "none" }}
                />
              </div>
              <div className="starReview">
                <div class="rating">
                  <input
                    type="radio"
                    id="5"
                    name="star-radio"
                    value={stars}
                    onChange={getStarsValueOnChange}
                  />
                  <label for="5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="4"
                    name="star-radio"
                    value={stars}
                    onChange={getStarsValueOnChange}
                  />
                  <label for="4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="3"
                    name="star-radio"
                    value={stars}
                    onChange={getStarsValueOnChange}
                  />
                  <label for="3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="2"
                    name="star-radio"
                    value={stars}
                    onChange={getStarsValueOnChange}
                  />
                  <label for="2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="1"
                    name="star-radio"
                    value={stars}
                    onChange={getStarsValueOnChange}
                  />
                  <label for="1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                className="chooseUser"
                id="chooseUser"
                onClick={chooseUserOnClick}
              >
                <h5>
                  {profile}
                  <span>
                    <BiIcons.BiChevronDown />
                  </span>
                </h5>
                <ul id="profileUl">
                  <li onClick={() => handleProfileClick(Cookies.get("name"))}>
                    {Cookies.get("name")}
                  </li>
                  <li onClick={() => handleProfileClick("Annonymous")}>
                    Annonymous
                  </li>
                </ul>
              </div>
              <textarea
                onChange={reviewOnChange}
                value={reviewText}
                name="review"
                id="review"
                placeholder="Type your review here..."
              />
              <button onClick={sumbitReview}>
                {loader ? <Spinner /> : "Submit"}
              </button>
            </div>
          </div>
        )}

        <div className="addReview">
          {!Cookies.get("token") ? (
            <button
              onClick={() => {
                router.push("/login");
              }}
            >
              <span>
                <HiIcons.HiPlus />
              </span>
              Login
            </button>
          ) : (
            <button onClick={showReviewForm}>
              <span>
                <HiIcons.HiPlus />
              </span>
              Add review{" "}
            </button>
          )}
        </div>
        <h1>
          Feedback from our{" "}
          <span style={{ color: "#f7cd46" }}>Client&apos;s</span>.
        </h1>
        <div className="mainSectiontestimonial">
          <div className="testimonial-card">
            <q>{currentReview.review}</q>
            <div className="imageTestimonial">
              {currentIndex <= 0 ? (
                <Image
                  style={{ opacity: "0" }}
                  id="prevImg"
                  src="/"
                  alt={reviews[currentIndex].name}
                  width={200}
                  height={150}
                  loading="lazy"
                />
              ) : (
                <Image
                  id="prevImg"
                  src={reviews[currentIndex - 1].image}
                  alt={reviews[currentIndex - 1].name}
                  width={200}
                  height={150}
                />
              )}
              <Image
                id="currentImage"
                src={currentReview.image}
                alt={currentReview.name}
                width={200}
                height={150}
              />
              {currentIndex === reviews.length - 1 ? (
                <Image
                  style={{ opacity: "0" }}
                  id="nextImg"
                  src="/"
                  alt={reviews[(currentIndex + 1) % reviews.length].name}
                  width={200}
                  height={150}
                />
              ) : (
                <Image
                  id="nextImg"
                  src={reviews[(currentIndex + 1) % reviews.length].image}
                  alt={reviews[(currentIndex + 1) % reviews.length].name}
                  width={200}
                  height={150}
                />
              )}

              <div className="nextPrevtest">
                <button onClick={handlePrev} disabled={currentIndex <= 0}>
                  <MdIcons.MdKeyboardArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === reviews.length - 1}
                >
                  <MdIcons.MdKeyboardArrowRight />
                </button>
              </div>
            </div>
            <h2>{currentReview.name}</h2>
            <div className="star">
              <h3>
                <AiIcons.AiFillStar />
                <AiIcons.AiFillStar />
                <AiIcons.AiFillStar />
                <AiIcons.AiFillStar />
                <AiIcons.AiFillStar />
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
