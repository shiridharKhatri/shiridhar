import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Login() {
  return (
    <>
      <Nav position="relative" background="#000000" />
      <section className="login" style={{background:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./header.svg")`}}>
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
              type="email"
              name="email"
              id="emailinp"
              placeholder="example@gmail.com"
            />
            <label className="password" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="passwordinp"
              placeholder="Enter your current password"
            />
            <div className="forgetPas">
              <div className="remember">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgetpass">
                <a href="#">Forget Password</a>
              </div>
            </div>
            <button>Login</button>
          </form>
          <h4>
            Don&apos;t have an Account? <a href="">Sign up</a>
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
      <Footer />
    </>
  );
}
