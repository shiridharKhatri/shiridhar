"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./tools/Spinner";
export default function NotFound() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Nav position="relative" background="#000000" image="./logo.png" />
      <section
        className="notfoundSection"
        style={{
          background: `rgba(238, 235, 255, 0.9) url("./nf-bg.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="notFoundText"
          style={{ backgroundImage: "url(./header.png)" }}
        >
          404
        </div>
        <p>
          Oops! The page you&apos;re looking for couldn&apos;t be found. It might have
          been moved, deleted, under maintainance, or simply doesn&apos;t exist.
          Please check the URL or navigate back to the homepage
        </p>
        <button
          onClick={() => {
            router.push("/");
            setActive(true);
          }}
        >
          {active ? <Spinner /> : "Go to home"}
        </button>
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
