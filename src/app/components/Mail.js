import Image from "next/image";
import React, { useState } from "react";

export default function Mail() {
  const [input, setInput] = useState({ email: "", message: "" });
  const host = "http://localhost:5000";
  const inpValOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: input.email,
      message: input.message,
    });

    let response = await fetch(`${host}/message/messagePost`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    setInput({ email: "", message: "" });
  };
  return (
    <section className="mainMailSection">
      <div className="mailSection" id="mailId">
        <div className="cardMail">
          <div className="mailImage">
            <Image src="./mail.gif" alt="message" width={300} height={50} />
          </div>
          <div className="mailContent" >
            <h2>
              Do you have any{" "}
              <span style={{ color: "var(--btn-text-color)" }}>message</span>{" "}
              for me?
            </h2>
            <h4>
              Send me your message by entering your valid email address. Thank
              you for visiting this website.
            </h4>
            <form action="">
              {/* <label htmlFor="email">Email</label> */}
              <input
                onChange={inpValOnChange}
                value={input.email}
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                onChange={inpValOnChange}
                value={input.message}
                name="message"
                id="message"
                placeholder="Type your mesage here"
              />
              <p>
                Note: Kindly refrain from using any inappropriate language. Only
                reach out through messaging if you have specific questions or
                require assistance. Thank you.
              </p>
              <button onClick={sendMessage}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
