"use client";
import React, { useState, useEffect } from "react";
import annyang from "annyang";
import { MdIcons, BiIcons, IoIcons, BsIcons } from "./Icons";
export default function Nav(props) {
  // const [recognizedText, setRecognizedText] = useState("");
  const [active, setActive] = useState(false);
  const [inpVal, setInpVal] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
  const onChangeState = (e)=>{
    setInpVal(e.target.value)
  }
  const showOptVoice = (e) => {
    e.preventDefault();
    const voiceSection = document.getElementById("voiceSection");
    voiceSection.classList.toggle("activeVoiceSec");
    if (voiceSection.classList.contains("activeVoiceSec")) {
      voiceSection.style.display = "flex";
    } else {
      voiceSection.style.display = "none";
    }
  };
  const startSpeechRecognition = (e) => {
    e.preventDefault();

    if (annyang) {
      const commands = {
        "*text": (text) => {
          setInpVal(text);
          if(text === "go down" || "godown"){
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth' // Smooth scroll behavior
            });
          }
        },
      };

      annyang.addCommands(commands);
      annyang.start({ autoRestart: false });
      setActive(true);
    }
  };
  
  const stopSpeechRecognition = (e) => {
    e.preventDefault();
    if (annyang) {
      annyang.abort();
      setActive(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav style={{position:props.position, background:props.background}} className={isScrolled ? 'navbar-scrolled' : 'navbar'}>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="otherSec">
        <form>
          <input type="search" value={inpVal} onChange={onChangeState} placeholder="search" />
          <button>
            <BiIcons.BiSearch />
          </button>
          <button id="voice" onClick={showOptVoice}>
            <MdIcons.MdKeyboardVoice />
          </button>
          <div className="voiceSection" id="voiceSection">
            {active === true ? (
              <div style={{ width: "100%", height:"100%" }}>
                <div className="freq">
                  <div class="ping"></div>
                  <h1>
                  <MdIcons.MdSettingsVoice />
                  </h1>
                  <p>Listening...</p>
                </div>
                <button
                  onClick={stopSpeechRecognition}
                  style={{ background: "#DC3545" }}
                >
                  <IoIcons.IoStop />
                  &nbsp;Stop
                </button>
              </div>
            ) : (
              <div style={{ width: "100%", height:"100%" }}>
                <div className="freq">
                  <h1>
                    <MdIcons.MdKeyboardVoice />
                  </h1>
                  <p>Start to listen</p>
                </div>
                <button
                  onClick={startSpeechRecognition}
                  style={{ background: "#00b300" }}
                >
                  <IoIcons.IoPlay />
                  &nbsp;Start
                </button>
              </div>
            )}
          </div>
        </form>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Service</li>
          <li>
            More <BiIcons.BiChevronDown />
          </li>
          <li id="contact">
            {" "}
            <IoIcons.IoCall />
            &nbsp;Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
