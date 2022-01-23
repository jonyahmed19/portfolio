import React from "react";
import Button from "../components/Button.component";
import SocialIcon from "../components/SocialIcon.component";
import jony from "../assets/jony2.png";
import cv from "../assets/cv.pdf";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaRegEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <div className="content">
          <div className="top-two">
            <div className="left-section photo">
              <img src={jony} alt="Jony" />
            </div>
            <div className="right-section text">
              <h2>
                Hi, I'm <span>Sahidul Islam</span>
              </h2>
              <h3>Frontend Developer</h3>
              <h4>JavaScript, React, Next</h4>
              <div className="icon-profile">
                <SocialIcon
                  name="github"
                  icon={<FaGithub />}
                  send="https://github.com/jonyahmed19"
                />
                <SocialIcon
                  name="linkedin"
                  icon={<FaLinkedinIn />}
                  send="https://linkedin.com/jonyahmed19"
                />
                <SocialIcon
                  name="mail"
                  icon={<FaRegEnvelope />}
                  send="mailto:jonywebdev19@gmail.com"
                />
                <SocialIcon
                  name="facebook"
                  icon={<FaFacebookF />}
                  send="https://facebook.com/jonyahmed19"
                />
              </div>
            </div>
          </div>
          <div className="bottom-button">
            <Button send="/works" text={"Works"} />
            <Button send="/contact" text={"Contact"} />
            <a target="_blank" href={cv}>
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
