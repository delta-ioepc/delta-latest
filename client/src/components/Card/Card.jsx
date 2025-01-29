import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faSnapchat,
  faInstagram,
  faTiktok,
  faXTwitter,
  // faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Card = ({
  name,
  src,
  title,
  linkedin,
  facebook,
  instagram,
  snapchat,
  tiktok,
  x,
  github,
}) => {
  return (
    <>
      <div className="committee-card">
        <div className="content">
          <div className="imgBx">
            <img src={src} alt="" />
          </div>
          <div className="contentBx">
            <h3>
              {name}
              <br />
              <span>{title}</span>
            </h3>
          </div>
        </div>
        <ul className="sci">
          {facebook !== "" && (
            <li style={{ "--i": 1 }}>
              <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
          )}
          {linkedin !== "" && (
            <li style={{ "--i": 2 }}>
              <Link to={linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </li>
          )}
          {snapchat !== "" && (
            <li style={{ "--i": 3 }}>
              <Link to={snapchat} target="_blank">
                <FontAwesomeIcon icon={faSnapchat} />
              </Link>
            </li>
          )}
          {instagram !== "" && (
            <li style={{ "--i": 4 }}>
              <Link to={instagram} target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          )}
          {tiktok !== "" && (
            <li style={{ "--i": 5 }}>
              <Link to={tiktok} target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
            </li>
          )}
          {x !== "" && (
            <li style={{ "--i": 6 }}>
              <Link to={x} target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li>
          )}
          {/* {github !== "" && (
            <li style={{ "--i": 6 }}>
              <Link to={github} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </>
  );
};

export default Card;
