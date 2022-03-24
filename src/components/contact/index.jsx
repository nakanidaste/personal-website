import React, { useRef, useState, useContext } from "react";
import "./index.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3y7z9z2",
        "template_pjr4g4w",
        formRef.current,
        "ZH0VWPVaUun956MKg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div
        className="c-bg"
        style={{ backgroundColor: darkMode && "white" }}
      ></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <div className="c-icon-wrapper">
                <img src={Phone} alt="" className="c-icon" />
              </div>{" "}
              <p className="c-icon-texts">085156984818</p>
            </div>
            <div className="c-info-item">
              <div className="c-icon-wrapper">
                <img src={Email} alt="" className="c-icon" />
              </div>{" "}
              <p className="c-icon-texts">samuelys945@gmail.com</p>
            </div>
            <div className="c-info-item">
              <div className="c-icon-wrapper">
                <img src={Address} alt="" className="c-icon" />{" "}
              </div>
              <p className="c-icon-texts">Wonogiri, Jawa Tengah, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button
              style={{
                backgroundColor: darkMode && "white",
                color: darkMode && "black",
              }}
            >
              Submit
            </button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
