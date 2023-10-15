"use client";
import { useState } from "react";
import { AiIcons, MdIcons, HiIcons } from "./Icons";
export default function Testimonial() {
  const reviews = [
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg",
    },
    {
      name: "Aaisha Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://th.bing.com/th/id/OIP.XIh1KAQahwnsMxPBnKvJvgHaFO?pid=ImgDet&rs=1",
    },
    {
      name: "Ken kaneki",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
    },
    {
      name: "Krishima touka",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://th.bing.com/th/id/OIP.XIh1KAQahwnsMxPBnKvJvgHaFO?pid=ImgDet&rs=1",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://t3.ftcdn.net/jpg/05/77/51/48/360_F_577514801_dQYirVqOAgFDFZMyI9Ea7tinfQOITO1R.jpg",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
    },
    {
      name: "Shiridhar Khatri",
      star: 5,
      review:
        "Great website! Simple, sleek design. Easy navigation. Content is engaging and loads quickly. Impressed with the user experience",
      image:
        "https://th.bing.com/th/id/OIP.XIh1KAQahwnsMxPBnKvJvgHaFO?pid=ImgDet&rs=1",
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
          <button><span><HiIcons.HiPlus/></span>Add review </button>
        </div>
        <h1>
          Feedback from our <span style={{ color: "#f7cd46" }}>Client's</span>.
        </h1>
        <div className="mainSectiontestimonial">
          <div className="testimonial-card">
            <q>{currentReview.review}</q>
            <div className="imageTestimonial">
              {currentIndex <= 0 ? (
                <img
                  style={{ opacity: "0" }}
                  id="prevImg"
                  src="#"
                  alt={reviews[currentIndex].name}
                />
              ) : (
                <img
                  id="prevImg"
                  src={reviews[currentIndex - 1].image}
                  alt={reviews[currentIndex - 1].name}
                />
              )}
              <img
                id="currentImage"
                src={currentReview.image}
                alt={currentReview.name}
              />
              {currentIndex === reviews.length - 1 ? (
                <img
                  style={{ opacity: "0" }}
                  id="nextImg"
                  src="#"
                  alt={reviews[(currentIndex + 1) % reviews.length].name}
                />
              ) : (
                <img
                  id="nextImg"
                  src={reviews[(currentIndex + 1) % reviews.length].image}
                  alt={reviews[(currentIndex + 1) % reviews.length].name}
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
