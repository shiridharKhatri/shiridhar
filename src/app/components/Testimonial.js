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
import { Alphabets, Profile } from "./Alphabets";
import Spinner from "../tools/Spinner";
import Loader from "../tools/Loader";
export default function Testimonial() {
  const [profile, setProfile] = useState(Cookies.get("name"));
  const [image, setProfileImage] = useState();
  const [imgs, setImage] = useState("");
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [prLoader, setPrLoader] = useState(true);
  const router = useRouter();
  const host = process.env.NEXT_PUBLIC_HOST;
  // const host = "https://portfolio-backend-0roz.onrender.com";
  const reviewOnChange = (e) => {
    setReviewText(e.target.value);
  };

  const showReviewForm = () => {
    let reviewForm = document.getElementById("reviewForm");
    reviewForm.style.display = "flex";
  };
  const closeReviewForm = () => {
    let reviewForm = document.getElementById("reviewForm");
    reviewForm.style.display = "none";
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

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

  function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <h3 key={`full-star-${i}`} className="stars">
          <AiIcons.AiFillStar />
        </h3>
      );
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <h3 key={`half-star-${i}`} className="stars">
          <AiIcons.AiFillStar style={{ opacity: 0.5 }} />
        </h3>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <h3 key={`empty-star-${i}`} className="stars">
          <AiIcons.AiOutlineStar />
        </h3>
      );
    }

    return stars;
  }
  const sumbitReview = async () => {
    setLoader(true);
    try {
      let headersList = {
        Accept: "*/*",
        "auth-token": Cookies.get("token"),
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        review: reviewText,
        star: stars,
        display_name: profile,
        img: !image ? imgs : image,
      });

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
          console.log(data);
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
  const exitOnMouseLeft = () => {
    let imageSelectionSection = document.getElementById(
      "imageSelectionSection"
    );
    imageSelectionSection.style.display = "none";
  };
  const ptofilePhoto = (e) => {
    setProfileImage(e);
    let imageSelectionSection = document.getElementById(
      "imageSelectionSection"
    );
    imageSelectionSection.style.display = "none";
  };
  const showProfileOpt = () => {
    let imageSelectionSection = document.getElementById(
      "imageSelectionSection"
    );
    imageSelectionSection.style.display = "grid";
  };
  useEffect(() => {
    const fetchReview = async () => {
      setPrLoader(true);
      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(`${host}/api/review/fetch`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === true) {
        setPrLoader(false);
        setReviews(data.review);
      } else {
        setPrLoader(false);
      }
    };
    fetchReview();
  }, [host]);

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
  const currentReview = reviews[currentIndex];
  // const nextReview = reviews[(currentIndex + 1) % reviews.length].img;
  // console.log('Next Review:', nextReview);
  return (
    <>
      <section
        className="testimonial"
        id="testimonialId"
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
              <div
                onClick={closeReviewForm}
                className="close-review"
                style={{ position: "absolute" }}
              >
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
                  closeReviewForm();
                  window.location.reload();
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
              <div
                onClick={showProfileOpt}
                className="imageSection"
                style={{ position: "relative" }}
              >
                <h2>Choose your avatar</h2>
                <Image
                  style={
                    !image
                      ? {
                          background:
                            "linear-gradient(45deg, rgb(35, 159, 233), rgb(68, 213, 243))",
                          cursor: "pointer",
                          padding: "1.5rem",
                        }
                      : {
                          background:
                            "linear-gradient(45deg, rgb(35, 159, 233), rgb(68, 213, 243))",
                          cursor: "pointer",
                        }
                  }
                  id="profile-img-select"
                  src={
                    profile === "Annonymous"
                      ? "./anonymous.png"
                      : !image
                      ? imgs
                      : image
                  }
                  alt="demo"
                  width={200}
                  height={150}
                />
              </div>
              <div
                className="imageSelectionSection"
                style={{ position: "absolute" }}
                id="imageSelectionSection"
                onMouseLeave={exitOnMouseLeft}
              >
                {Profile.map((e, index) => {
                  return (
                    <div
                      onClick={() => {
                        ptofilePhoto(e.image);
                      }}
                      className="imageItems"
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: ".5rem",
                      }}
                    >
                      <Image
                        key={index}
                        style={{
                          height: "6rem",
                          width: "6rem",
                          cursor: "pointer",
                        }}
                        alt={e.image}
                        width={200}
                        height={150}
                        src={e.image}
                      />
                    </div>
                  );
                })}
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
            id="addReviewId"
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
            <button id="addReviewId" onClick={showReviewForm}>
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
          {prLoader ? (
            <div className="testimonial-card">
              <Loader />
            </div>
          ) : (
            <div className="testimonial-card">
              <q>{currentReview.review}</q>
              <div className="imageTestimonial">
                {currentIndex <= 0 ? (
                  <Image
                    style={{ opacity: "0" }}
                    id="prevImg"
                    src="./profile.png"
                    alt={reviews[currentIndex].display_name}
                    width={200}
                    height={150}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    id="prevImg"
                    src={
                      reviews[currentIndex - 1].display_name === "Annonymous"
                        ? "./anonymous.png"
                        : reviews[currentIndex - 1].img
                    }
                    alt={reviews[currentIndex - 1].display_name}
                    width={200}
                    height={150}
                  />
                )}
                <Image
                  id="currentImage"
                  src={
                    currentReview.display_name === "Annonymous"
                      ? "./anonymous.png"
                      : currentReview.img
                  }
                  alt={currentReview.display_name}
                  width={200}
                  height={150}
                />
                {currentIndex === reviews.length - 1 ? (
                  <Image
                    style={{ opacity: "0" }}
                    id="nextImg"
                    src="./profile.png"
                    alt={
                      reviews[(currentIndex + 1) % reviews.length].display_name
                    }
                    width={200}
                    height={150}
                  />
                ) : (
                  <Image
                    id="nextImg"
                    src={
                      reviews[(currentIndex + 1) % reviews.length]
                        .display_name === "Annonymous"
                        ? "./anonymous.png"
                        : reviews[(currentIndex + 1) % reviews.length].img
                    }
                    alt={
                      reviews[(currentIndex + 1) % reviews.length].display_name
                    }
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
              <h2>{currentReview.display_name}</h2>
              <div className="star">{getRatingStars(currentReview.star)}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
