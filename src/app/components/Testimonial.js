"use client";
import { useState } from "react";
import { AiIcons, MdIcons, HiIcons } from "./Icons";
import Image from "next/image";
export default function Testimonial() {
  const reviews = [
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Aaisha Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Ken kaneki",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Krishima touka",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "/profile.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <>
      <section className="testimonial">
        <div className="addReview">
          <button>
            <span>
              <HiIcons.HiPlus />
            </span>
            Add review{" "}
          </button>
        </div>
        <h1>
          Feedback from our <span style={{ color: "#f7cd46" }}>Client's</span>.
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
