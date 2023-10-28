"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AiIcons, IoIcons } from "../components/Icons";
import Spinner from "../tools/Spinner";
import Image from "next/image";
export default function Verify(props) {
  const [verify, setVerify] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState({ error: false, success: false });
  const [error, setError] = useState({ error: false, success: false });
  const [active, setActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState({
    password: "",
    confirm_password: "",
  });
  const [fieldError, setFieldError] = useState({
    password: "",
    confirm_password: "",
  });
  const verifyOnChange = (e) => {
    setVerify(e.target.value);
    setStatus((prevStatus) => ({ ...prevStatus, error: false }));
  };
  const codeOnChange = (e) => {
    setCode(e.target.value);
    setError((prevStatus) => ({ ...prevStatus, error: false }));
  };
  const passwordOnChange = (e) => [
    setPassword({ ...password, [e.target.name]: e.target.value }),
    setFieldError({
      password: "",
      confirm_password: "",
    }),
  ];
  // const host = process.env.NEXT_PUBLIC_HOST;
  const host ="https://portfolio-backend-0roz.onrender.com"
  const verifyEmail = async (e) => {
    e.preventDefault();
    setActive(true);
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: verify,
      });

      let response = await fetch(
        `${host}/auth/User/forgetPasswordEmailValidation`,
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      if (data.success === false) {
        setStatus({ error: true, success: false });
        setActive(false);
      } else {
        setStatus({ error: false, success: true });
        let successVerify = document.getElementById("successVerify");
        successVerify.style.top = "5rem";
        setActive(false);
        setTimeout(() => {
          successVerify.style.top = "-5rem";
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const validateCode = async (e) => {
    e.preventDefault();
    setActive(true);
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: verify,
        code: Number(code),
      });

      let response = await fetch(`${host}/auth/User/forgetPasswordConfirm`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === false) {
        setError({ error: true, success: false });
        setActive(false);
        setSuccess(false);
      } else {
        localStorage.setItem("name", data.name);
        setError({ error: false, success: true });
        setActive(false);
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const updateNewPassword = async (e) => {
    e.preventDefault();
    setActive(true);
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: verify,
        password: password.password,
        confirm_password: password.confirm_password,
      });

      let response = await fetch(`${host}/auth/User/forgetChangePassword`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.json();
      if (data.success === false) {
        setActive(false);
        if (data.errors && data.errors.length > 0) {
          data.errors.forEach((e) => {
            setFieldError((prevErrors) => ({
              ...prevErrors,
              [e.path]: e.msg,
            }));
          });
        } else {
          setFieldError({
            password: "",
            confirm_password: data.msg,
          });
        }
      } else {
        setTimeout(() => {
          localStorage.removeItem("name");
        }, 180000); // 180,000 milliseconds (3 minutes)
        let successVerify = document.getElementById("successVerify");
        successVerify.style.top = "5rem";
        setActive(false);
        setTimeout(() => {
          successVerify.style.top = "-5rem";
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <Nav background="#000000" image="./logo.png"/>

      {success === true ? (
        <section
          className="verify"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./header.svg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="successDisplay" id="successVerify">
            <p>
              <IoIcons.IoCheckmarkDoneCircle />
              &nbsp;Password created successfully.
            </p>
          </div>
          <div className="mainVerifyCard">
            <div className="imageLogo">
              <Image src="./logo.png" alt="logo" width={200} height={150} />
              <h3>hiridhar</h3>
            </div>
            <div id="welcomeTe">
              <h4>Enter new password.</h4>
              <h4>
                Welcome back{" "}
                <span
                  style={{
                    color: "#5626c4",
                    fontFamily: `"Belanosima", sans-serif`,
                  }}
                >
                  {localStorage.getItem("name")}.
                </span>
              </h4>
            </div>
            <p>
              Set your new password by entering a password that is at least 8
              characters long and includes a mix of uppercase/lowercase letters,
              numbers, and special characters.
            </p>
            <form action="">
              <input
                style={
                  fieldError.password.length >= 1
                    ? { border: "0.1rem solid #ff0000" }
                    : { border: "0.1rem solid #445" }
                }
                onChange={passwordOnChange}
                value={password.password}
                name="password"
                type="password"
                placeholder="Enter you new password"
              />

              {fieldError.password.length >= 1 ? (
                <p>
                  {" "}
                  <AiIcons.AiOutlineInfoCircle />
                  &nbsp;{fieldError.password}
                </p>
              ) : (
                <p></p>
              )}
              <input
                style={
                  fieldError.confirm_password.length >= 1
                    ? { border: "0.1rem solid #ff0000" }
                    : { border: "0.1rem solid #445" }
                }
                onChange={passwordOnChange}
                value={password.confirm_password}
                name="confirm_password"
                type="password"
                placeholder="Re-Type your new password"
              />

              {fieldError.confirm_password.length >= 1 ? (
                <p>
                  {" "}
                  <AiIcons.AiOutlineInfoCircle />
                  &nbsp;{fieldError.confirm_password}
                </p>
              ) : (
                <p></p>
              )}
              <div className="verify-bt">
                <button>Cancel</button>
                <button
                  onClick={updateNewPassword}
                  style={{ background: "#5626c4", color: "#ffffff" }}
                >
                  {active === true ? <Spinner /> : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section
          className="verify"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./header.svg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="successDisplay" id="successVerify">
            <p>
              <IoIcons.IoCheckmarkDoneCircle />
              &nbsp;Verification code sent successfully.
            </p>
          </div>
          <div className="mainVerifyCard">
            <div className="imageLogo">
              <Image src="./logo.png" alt="logo" height={100} width={150}/>
              <h3>hiridhar</h3>
            </div>
            <div id="welcomeTe">
              {/* <h4>Forget Password!</h4> */}
              <h4>
                Verify your{" "}
                <span
                  style={{
                    color: "#5626c4",
                    fontFamily: `"Belanosima", sans-serif`,
                  }}
                >
                  Email.
                </span>
              </h4>
            </div>
            <p>
              {" "}
              To reset your password, please verify your email address by
              entering the email associated with your account and check email or
              spam folder for six digit code.
            </p>
            <form action="">
              <input
                style={
                  status.error === true
                    ? { border: "0.1rem solid #ff0000" } // Red border for error
                    : { border: "0.1rem solid #445" } // Regular border
                }
                onChange={verifyOnChange}
                value={verify}
                type="email"
                name="email"
                placeholder="example@gmail.com"
                disabled={status.success === true}
              />
              {status.error === true ? (
                <p>
                  <AiIcons.AiOutlineInfoCircle />
                  &nbsp;User with given email doesn&apos;t exist.
                </p>
              ) : (
                <p></p>
              )}
              {status.success === true ? (
                <>
                  {" "}
                  <input
                    style={
                      error.error === true
                        ? { border: "0.1rem solid #ff0000" } // Red border for error
                        : { border: "0.1rem solid #445" } // Regular border
                    }
                    type="number"
                    name="code"
                    placeholder="Enter six digit code"
                    onChange={codeOnChange}
                    value={code}
                  />
                  {error.error === true ? (
                    <p>
                      <AiIcons.AiOutlineInfoCircle />
                      &nbsp;Please Enter correct code we have sended in your
                      mail
                    </p>
                  ) : (
                    <p></p>
                  )}
                </>
              ) : (
                ""
              )}

              <div className="verify-bt">
                <button>Cancel</button>
                {status.success === true ? (
                  <button
                    onClick={validateCode}
                    style={{ background: "#5626c4", color: "#ffffff" }}
                  >
                    {active === true ? <Spinner /> : "Continue"}
                  </button>
                ) : (
                  <button
                    onClick={verifyEmail}
                    style={{ background: "#5626c4", color: "#ffffff" }}
                  >
                    {active === true ? <Spinner /> : "Send Code"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      <Footer image="./secondLogo.png"/>
    </>
  );
}
