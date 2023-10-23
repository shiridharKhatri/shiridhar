import Image from "next/image";
import React from "react";

export default function Mail() {
  return (
    <section className="mainMailSection">
      <div className="mailSection">
        <div className="mailImage">
          <Image src="./mail.gif" alt="message"  width={300} height={50} />
        </div>
        <div className="mailContent">
          <h2>Do you have any <span style={{color:"#5626c4"}}>message</span> for me?</h2>
          <h4>Send me your message by entering your valid email address. Thank you for visiting this website.</h4>
          <form action="">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              name="message"
              id="message"
              placeholder="Type your mesage here"
            />
            <p>
              Note: Kindly refrain from using any inappropriate language. Only
              reach out through messaging if you have specific questions or
              require assistance. Thank you.
            </p>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
