"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AiIcons, IoIcons } from "../components/Icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from "../tools/Spinner";
import Cookies from "js-cookie";
import Loader from "../tools/Loader";
// Define the Signup functional component
export default function Signup() {
  let router = useRouter();
  // Initialize state variables
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [fieldError, setFieldError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [gender, setGender] = useState("");
  const [loader, setLoader] = useState(false);
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setError(false);
    setFieldError({
      name: "",
      email: "",
      password: "",
    });
  };
  const host = process.env.NEXT_PUBLIC_HOST || "https://rich-teal-fossa-gear.cyclic.app";
  // const host = "https://portfolio-backend-0roz.onrender.com";
  // Handle gender selection change
  const handleGenderChange = (e) => {
    setGender(e.target.id);
  };

  // Handle signup button click
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      // Create headers and body for the request
      const headers = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const body = JSON.stringify({
        name: input.name,
        email: input.email,
        password: input.password,
        gender,
      });

      if (input.password !== input.confirmPassword) {
        setError(true);
      } else {
        // Send signup request
        const response = await fetch(`${host}/auth/User/signup`, {
          method: "POST",
          body,
          headers,
        });
        const data = await response.json();
        console.log(data);

        if (data.success === false) {
          setLoader(false);
          // Handle error response
          if (data.errors && data.errors.length > 0) {
            data.errors.forEach((e) => {
              setFieldError((prevErrors) => ({
                ...prevErrors,
                [e.path]: e.msg,
              }));
            });
          } else {
            setFieldError({
              name: "",
              email: data.msg,
              password: "",
            });
          }
        } else {
          router.push("/login");
          setLoader(false);
          let successDisp = document.getElementById("successDisp");
          successDisp.style.top = "5rem";
          setTimeout(() => {
            successDisp.style.top = "-5rem";
          }, 4000);
        }
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  useEffect(()=>{
    if(Cookies.get('token')){
      router.push('/')
    }
  },[])
  return (
    <>
      <Nav position="relative" background="#000000" image="./logo.png" />
     {Cookies.get('token') ? <Loader/> : <section
        className="signup"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./header.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="successDisplay" id="successDisp">
          <p>
            <IoIcons.IoCheckmarkDoneCircle />
            &nbsp;Account Created successfully
          </p>
        </div>
        <div className="mainSignupCard">
          <div className="imageLogo">
            <Image src="./logo.png" alt="logo" width={200} height={150} />
            <h3>hiridhar</h3>
          </div>
          <div id="welcomeTe">
            <h4>
              Create new{" "}
              <span
                style={{
                  color: "#5626c4",
                  fontFamily: `"Belanosima", sans-serif`,
                }}
              >
                Account.
              </span>
            </h4>
          </div>
          <form action="">
            <label htmlFor="username">Username</label>
            <input
              style={
                fieldError.name.length >= 1
                  ? { border: "0.1rem solid #ff0000" }
                  : { border: "0.1rem solid #445" }
              }
              type="text"
              name="name"
              id="username"
              placeholder="eg, ken kaneki"
              onChange={handleInputChange}
              value={input.name}
            />
            {fieldError.name.length >= 1 ? <p> {fieldError.name}</p> : <p></p>}
            <label htmlFor="signupEmail">Email</label>
            <input
              style={
                fieldError.email.length >= 1
                  ? { border: "0.1rem solid #ff0000" }
                  : { border: "0.1rem solid #445" }
              }
              type="email"
              name="email"
              id="signupEmail"
              placeholder="example@gmail.com"
              onChange={handleInputChange}
              value={input.email}
            />
            {fieldError.email.length >= 1 ? (
              <p> {fieldError.email}</p>
            ) : (
              <p></p>
            )}
            <label htmlFor="signupPassword">Password</label>
            <input
              style={
                fieldError.password.length >= 1
                  ? { border: "0.1rem solid #ff0000" }
                  : { border: "0.1rem solid #445" }
              }
              type="password"
              name="password"
              id="signupPassword"
              placeholder="Enter your new password"
              onChange={handleInputChange}
              value={input.password}
            />
            {fieldError.password.length >= 1 ? (
              <p> {fieldError.password}</p>
            ) : (
              <p></p>
            )}

            <label htmlFor="confirmSignupPassword">Confirm Password</label>
            <input
              style={
                error === true
                  ? { border: "0.1rem solid #ff0000" }
                  : { border: "0.1rem solid #445" }
              }
              type="password"
              name="confirmPassword"
              id="confirmSignupPassword"
              placeholder="Re-type your password"
              onChange={handleInputChange}
              value={input.confirmPassword}
            />
            {error === true ? (
              <p>Confirm password and password doesn&apos;t match</p>
            ) : (
              <p></p>
            )}
            <div className="gender">
              <div className="radio-button-container">
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="Male"
                    name="radio-group"
                    onChange={handleGenderChange}
                    checked={gender === "Male"} // Added checked property
                  />
                  <label className="radio-button__label" htmlFor="Male">
                    <span className="radio-button__custom"></span>
                    <span>Male</span>
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="Female"
                    name="radio-group"
                    onChange={handleGenderChange}
                    checked={gender === "Female"} // Added checked property
                  />
                  <label className="radio-button__label" htmlFor="Female">
                    <span className="radio-button__custom"></span>
                    <span>Female</span>
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    className="radio-button__input"
                    id="Other"
                    name="radio-group"
                    onChange={handleGenderChange}
                    checked={gender === "Other"} // Added checked property
                  />
                  <label className="radio-button__label" htmlFor="Other">
                    <span className="radio-button__custom"></span>
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </div>
            <button onClick={handleSignup}>
              {loader === true ? <Spinner /> : "Signup"}
            </button>
          </form>
          <h4>
            Already have an Account? <Link href="/login">Sign in</Link>
          </h4>
          <h5>Or With</h5>
          <div className="socialLogin">
            <ul>
              <li>
                <Image
                  width={50}
                  height={50}
                  src="https://img.icons8.com/3d-fluency/94/google-logo.png"
                  alt="google-logo"
                />
              </li>
              <li>
                <Image
                  width={50}
                  height={50}
                  src="https://img.icons8.com/3d-fluency/188/facebook-circled.png"
                  alt="facebook-circled"
                />
              </li>
              <li>
                <Image
                  width={50}
                  height={50}
                  src="https://img.icons8.com/3d-fluency/94/github.png"
                  alt="github"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>}
      <Footer image="./secondLogo.png" />
    </>
  );
}
