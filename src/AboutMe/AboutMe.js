import React from "react";
import "./AboutMe.css";
import { ImExit } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";
function AboutMe() {
  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();

  function handleExit() {
    navigate("/home");
  }

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/parth-bhatti-a409a0246/");
  };

  return (
    <div className="co">
      {loading ? (
        <RingLoader
          color={"#FFEE00"}
          loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="aboutMeCard">
          <ImExit className="exit-button" onClick={handleExit} />
          <h3 className="profile-name">Parth Bhatti</h3>
          <p className="about">Full Stack Developer</p>
          <h1 className="about-me">AboutMe</h1>
          <p className="about-me-text">
            I'm BCA Student(2021-2024) of Marwadi University
          </p>
          <p className="about-me-text">
            I Would Like to Make Full Stack Projects
          </p>
          <div className="icons">
            <i
              className="fa-brands fa-linkedin"
              id="link"
              onClick={linkedIn}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
