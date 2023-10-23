import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Nav position="fixed" />
      <section>
        <div
          className="blogHead"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("https://blog.vrplayin.ca/wp-content/uploads/2023/06/immersive-experience.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="content">
            <h5>New Blog</h5>
            <h1>How to create a responsive navbar without many codes</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              recusandae iste, aspernatur tempora nemo eum. In, repellendus
              libero cum debitis accusantium pariatur neque incidunt aliquam sit
              quidem repellat nobis corporis.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="allBlogsSec">
          <h1>Blogs</h1>
          <div className="blogCardParent">
            <div className="blogTitleHead">
              <h3>
                Total Blogs(34) <span>Page : 1</span>
              </h3>
            </div>
            <div className="cardsSecParent">
              <div className="cards">
                <div className="BlogCardImage">
                    {/* <Image src="/"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
