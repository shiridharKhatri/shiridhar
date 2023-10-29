"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../tools/Spinner";
export default function Login() {
  const [value, setValue] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState({ success: "", message: "" });
  const [loader, setLoader] = useState(false);
  // const host = process.env.NEXT_PUBLIC_HOST;
  const host = "https://portfolio-backend-0roz.onrender.com";
  let router = useRouter();
  const loginOnChangeStage = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSuccess({ success: "" });
  };
  // console.log(value.email, value.password)
  const loginOnCLick = async (e) => {
    e.preventDefault();
    setLoader(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: value.email,
      password: value.password,
    });

    let response = await fetch(`${host}/auth/User/login`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    let errorMessageLogin = document.getElementById("errorMessageLogin");

    let data = await response.json();
    if (data.success === true) {
      setLoader(false);
      router.push("/");
      Cookies.set("token", data.token);
      Cookies.set("name", data.name);
      Cookies.set("email", data.email);
      setSuccess({ success: true, msg: data.msg });
      errorMessageLogin.style.top = "3rem";
      setTimeout(() => {
        errorMessageLogin.style.top = "-10rem";
      }, 4000);
    } else {
      setLoader(false);
      setSuccess({ success: false, message: data.msg });
      errorMessageLogin.style.top = "3rem";
      setTimeout(() => {
        errorMessageLogin.style.top = "-10rem";
      }, 4000);
    }
  };
  return (
    <>
      <Nav position="relative" background="#000000" image="./logo.png" />
      <section
        className="login"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./header.svg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {success.success === true ? (
          <div
            className="errorPopuo"
            id="errorMessageLogin"
            style={{ background: "#84D65A" }}
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                fill="#ffffff"
                fill-rule="evenodd"
              ></path>
            </svg>
            &nbsp;
            <p>Logged in successfully! {success.msg}.</p>
          </div>
        ) : (
          <div
            className="errorPopuo"
            id="errorMessageLogin"
            style={{ background: "#ef665b" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              height="24"
              fill="none"
            >
              <path
                fill="#ffffff"
                d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
              ></path>
            </svg>
            &nbsp;
            <p>The data provided doesn't align with valid user criteria.</p>
          </div>
        )}

        <div className="mainLoginCard">
          <div className="imageLogo">
            <Image src="./logo.png" alt="logo" width={200} height={150} />
            <h3>hiridhar</h3>
          </div>
          <div id="welcomeTe">
            <h4>Hey There!</h4>
            <h4>
              Welcome back{" "}
              <span
                style={{
                  color: "#5626c4",
                  fontFamily: `"Belanosima", sans-serif`,
                }}
              >
                Portfolio.
              </span>
            </h4>
          </div>
          <form>
            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              style={
                success.success === false
                  ? { border: ".1rem solid #ff0000" }
                  : { border: ".1rem solid #445" }
              }
              type="email"
              name="email"
              id="emailinp"
              placeholder="example@gmail.com"
              onChange={loginOnChangeStage}
              value={value.email}
            />
            <label className="password" htmlFor="password">
              Password
            </label>
            <input
              style={
                success.success === false
                  ? { border: ".1rem solid #ff0000" }
                  : { border: ".1rem solid #445" }
              }
              type="password"
              name="password"
              id="passwordinp"
              placeholder="Enter your current password"
              onChange={loginOnChangeStage}
              value={value.password}
            />
            <div className="forgetPas">
              <div className="remember">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgetpass">
                <Link href="/verify">Forget Password</Link>
              </div>
            </div>
            <button onClick={loginOnCLick}>
              {loader === true ? <Spinner /> : "Login"}
            </button>
          </form>
          <h4>
            Don&apos;t have an Account? <Link href="/signup">Sign up</Link>
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
      </section>
      <Footer image="./secondLogo.png" />
    </>
  );
}
