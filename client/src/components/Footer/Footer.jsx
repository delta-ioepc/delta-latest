import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faDiscord,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoSend } from "react-icons/io5";
import Swal from "sweetalert2";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0494fbc6-41f7-4df4-8f1c-8535642229f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        color: "#3e4a91",
        background: "#e8f0fe",
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
          popup: "custom-toast",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Email sent successfully",
      });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col">
            <img src="/delta-logo.svg" className="logo" alt="" />
            <p>
              Delta is an organization fueled by the passion and ingenuity of
              engineering students at Purwanchal Campus in Dharan, Sunsari.
              Established as a collaborative effort by students from seven
              diverse faculties—Agricultural, Architecture, Computer, Civil,
              Electrical, Electronics, Information & Communication, and
              Mechanical—Delta stands as a testament to the power of unity in
              education.
            </p>
          </div>
          <div className="col">
            <h3>
              Office
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Gangalal Marg</p>
            <p>Tinkune, Dharan</p>
            <p>Koshi, PIN 56700, Nepal</p>
            <p className="email-id">
              <Link to="mailto:delta@ioepc.edu.np">delta@ioepc.edu.np</Link>
            </p>
            <h4>+977 - 9702680657</h4>
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events">Event</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
              <li>
                <Link to="/committee">Committee</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Get Updates
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form onSubmit={onSubmit} className="footer-form">
              <FontAwesomeIcon icon={faEnvelope} className="mailIcon" />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email id"
                required
              />
              <button type="submit">
                <IoSend className="arrowIcon" />
              </button>
            </form>
            <h3>
              Follow Us
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <div className="social-icons">
              <span className="iconBox">
                <Link to="https://www.facebook.com/delta.ioe" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="fa" />
                </Link>
              </span>
              <span className="iconBox">
                <Link
                  to="https://www.linkedin.com/company/deltaioe/posts/?feedView=all"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa" />
                </Link>
              </span>
              <span className="iconBox">
                <Link to="#" target="_blank">
                  <FontAwesomeIcon icon={faDiscord} className="fa" />
                </Link>
              </span>
              <span className="iconBox">
                <Link to="#" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className="fa" />
                </Link>
              </span>
              <span className="iconBox">
                <Link to="#" target="_blank">
                  <FontAwesomeIcon icon={faTiktok} className="fa" />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <p>
            Developed by{" "}
            <Link to="https://github.com/chyroshan066" target="_blank">
              @chyroshan066
            </Link>
          </p>
          <p>© 2024 - DELTA</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
