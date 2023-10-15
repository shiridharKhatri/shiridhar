import React from "react";

export default function Mail() {
  return (
    <section className="mainMailSection">
      <div className="mailSection">
        <div className="mailImage">
          <img src="/mail.gif" alt="message" height={200} />
        </div>
        <div className="mailContent">
          <h2>Contact</h2>
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="message">Message</label>
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
