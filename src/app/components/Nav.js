"use client";
import React, { useState, useEffect } from "react";
// import annyang from "annyang";
import {
  MdIcons,
  BiIcons,
  IoIcons,
  AiIcons,
  BsIcons,
  CgIcons,
  GoIcons,
  TbIcons,
} from "./Icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Alphabets } from "./Alphabets";
import Loader from "../tools/Loader";
export default function Nav(props) {
  // const [recognizedText, setRecognizedText] = useState("");
  const [active, setActive] = useState(false);
  const [inpVal, setInpVal] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [image, setImage] = useState("");
  const onChangeState = (e) => {
    setInpVal(e.target.value);
  };
  // const showOptVoice = (e) => {
  //   e.preventDefault();
  //   const voiceSection = document.getElementById("voiceSection");
  //   voiceSection.classList.toggle("activeVoiceSec");
  //   if (voiceSection.classList.contains("activeVoiceSec")) {
  //     voiceSection.style.display = "flex";
  //   } else {
  //     voiceSection.style.display = "none";
  //   }
  // };
  // const startSpeechRecognition = (e) => {
  //   e.preventDefault();

  //   if (annyang) {
  //     const commands = {
  //       "*text": (text) => {
  //         setInpVal(text);
  //       },
  //     };

  //     annyang.addCommands(commands);
  //     annyang.start({ autoRestart: false });
  //     setActive(true);
  //   } else {
  //     console.error("annyang is not defined");
  //   }
  // };

  // const stopSpeechRecognition = (e) => {
  //   e.preventDefault();
  //   if (annyang) {
  //     annyang.abort();
  //     setActive(false);
  //   } else {
  //     console.error("annyang is not defined");
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sideMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = "0";
  };
  const cancelMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = "-100%";
  };
  const router = useRouter();
  const cookieValue = Cookies.get("token");
  const name = Cookies.get("name");
  const email = Cookies.get("email");
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");
    router.push("/login");
  };
  const showMenuOnClick = ()=>{
    let id = document.getElementById("DropDown");
    id.classList.toggle("togglMoreSec");
    if(id.classList.contains("togglMoreSec")){
      id.style.display = "flex";
    }else{
      id.style.display = "none";
    }
  }
  useEffect(() => {
    if (cookieValue) {
      Alphabets.forEach((e) => {
        if (e.letter === name.slice(0, 1).toLowerCase()) {
          setImage(e.image);
        }
      });
    }
  }, []);
  return (
    <>
    {/* <Loader/> */}
    <nav
      style={{ position: props.position, background: props.background }}
      className={isScrolled ? "navbar-scrolled" : "navbar"}
    >
      <div
        className="logo"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={props.image} alt="logo" width={200} height={150} />
      </div>
      <div className="otherSec">
        <form>
          <input
            type="search"
            value={inpVal}
            onChange={onChangeState}
            placeholder="search"
          />
          <button>
            <BiIcons.BiSearch />
          </button>
          <button id="voice">
            <MdIcons.MdKeyboardVoice />
          </button>
          <div className="voiceSection" id="voiceSection">
            {active === true ? (
              <div style={{ width: "100%", height: "100%" }}>
                <div className="freq">
                  <div className="ping"></div>
                  <h1>
                    <MdIcons.MdSettingsVoice />
                  </h1>
                  <p>Listening...</p>
                </div>
                <button
                  // onClick={stopSpeechRecognition}
                  style={{ background: "#DC3545" }}
                >
                  <IoIcons.IoStop />
                  &nbsp;Stop
                </button>
              </div>
            ) : (
              <div style={{ width: "100%", height: "100%" }}>
                <div className="freq">
                  <h1>
                    <MdIcons.MdKeyboardVoice />
                  </h1>
                  <p>Start to listen</p>
                </div>
                <button
                  // onClick={startSpeechRecognition}
                  style={{ background: "#00b300" }}
                >
                  <IoIcons.IoPlay />
                  &nbsp;Start
                </button>
              </div>
            )}
          </div>
        </form>
        <ul id="sideMenu">
          <div className="logo hidden" id="logo">
            {cookieValue ? (
              <div className="imageProfile" style={{ padding: "1rem" }}>
                <Image
                  style={{
                    height: "8rem",
                    width: "8rem",
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)",
                    padding: "1rem",
                  }}
                  src={image}
                  alt="logo"
                  width={200}
                  height={150}
                />
                <div className="profileDe">
                  <h1>{name}</h1>
                  <p>{email}</p>
                </div>
              </div>
            ) : (
              <Image
                style={{ width: "auto" }}
                src="./logo.png"
                alt="logo"
                width={200}
                height={150}
              />
            )}
            <div className="cancel">
              <h2 onClick={cancelMenuOnClick}>
                <IoIcons.IoCloseSharp />
              </h2>
            </div>
          </div>
          <div className="topMenuSecInfo">
            <div className="hidden more">
              <h3>
                <span>
                  <BsIcons.BsMenuUp />
                </span>
                Menu
              </h3>
            </div>
            <li onClick={()=>{
              router.push('/')
            }}>
              <span className="hidden">
                <BiIcons.BiHomeAlt />
              </span>
              Home
            </li>
            <li>
              <span className="hidden">
                <AiIcons.AiOutlineFundProjectionScreen />
              </span>
              Projects
            </li>
            <li>
              <span className="hidden">
                <MdIcons.MdWorkOutline />
              </span>
              Service
            </li>
            <li id="moreItem" onClick={showMenuOnClick}>
              More <BiIcons.BiChevronDown />
            </li>
          </div>
          <li
            id="contact"
            className="mobile-hidden"
            onClick={() => {
              router.push("/login");
            }}
          >
            <AiIcons.AiOutlineLogin />
            &nbsp;Login
          </li>
          <ul id="DropDown">
            <div className="hidden more">
              <h3>
                <span>
                  <BsIcons.BsMenuButtonWideFill />
                </span>
                More
              </h3>
            </div>
            <li
              onClick={() => {
                router.push("/blog");
              }}
            >
              <span>
                <BsIcons.BsBook />
              </span>
              Blogs
            </li>
            <li>
              <span>
                <CgIcons.CgFeed />
              </span>
              Projectfeed
            </li>
            <li>
              <span>
                <MdIcons.MdOutlineWorkspacePremium />
              </span>
              Paid Code
            </li>
            <li onClick={()=>{router.push('/free_code')}}>
              <span>
                <GoIcons.GoFileCode />
              </span>
              Free code (For learners)
            </li>
            <li>
              <span>
                <TbIcons.TbPhoto />
              </span>
              Gallery
            </li>
            {!cookieValue ? (
              <li
                onClick={() => {
                  router.push("/signup");
                }}
              >
                <span>
                  <BsIcons.BsPersonPlus />
                </span>
                Signup
              </li>
            ) : (
              <li>
                <span>
                  <AiIcons.AiOutlineSetting />
                </span>
                Setting
              </li>
            )}
          </ul>
          {!cookieValue ? (
            <li
              id="AuthIco"
              className="hidden"
              onClick={() => {
                router.push("/login");
              }}
            >
              <AiIcons.AiOutlineLogin />
              &nbsp;Login
            </li>
          ) : (
            <li id="AuthIco" className="hidden" onClick={logout}>
              <BiIcons.BiLogOutCircle />
              &nbsp;Logout
            </li>
          )}
        </ul>
        <div className="menu hidden">
          <h1 onClick={sideMenuOnClick}>
            <IoIcons.IoMenu />
          </h1>
        </div>
      </div>
    </nav>
    </>
  );
}
