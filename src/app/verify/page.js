import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AiIcons } from "../components/Icons";
export default function Verify(props) {
  return (
    <>
      <Nav background="#000000" />
      <section className="verify">
        <div className="mainVerifyCard">
          <div className="imageLogo">
            <img src="/logo.png" alt="logo" />
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
            To reset your password, please verify your email address by entering
            the email associated with your account and check email or spam
            folder for six digit code.
          </p>
          <form action="">
            <input type="email" name="email" placeholder="example@gmail.com" />
            <p>
              {/* <AiIcons.AiOutlineInfoCircle />
              &nbsp;Please Enter correct email address */}
            </p>
            {/* <input
              type="number"
              name="code"
              placeholder="Enter six digit code"
            />
            <p>
              <AiIcons.AiOutlineInfoCircle />
              &nbsp;Please Enter correct email address
            </p> */}
            <div className="verify-bt">
              <button>Cancel</button>
              <button style={{ background: "#5626c4", color: "#ffffff" }}>
                Send code
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
