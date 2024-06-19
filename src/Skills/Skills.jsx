import React from 'react';
import { useEffect } from 'react';
import './Skills.css';
import { ImExit } from 'react-icons/im';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useState } from 'react';

function Skills() {
  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();

  function handleExit() {
    navigate('/home');
  }

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PacmanLoader
          color={"#FFEE00"}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className='MySkillContainer'>
          <ImExit className='exit-button' style={{ color: "black" }} onClick={handleExit} />
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">90%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>HTML</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">90%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>CSS</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">80%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>JAVASCRIPT</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">90%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>REACT</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">80%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>NODE JS</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">80%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>MONGODB</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">80%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>EXPRESS</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">70%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>TYPESCRIPT</h1>
          </div>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">80%</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            <h1 style={{ color: "black", fontSize: "3rem" }}>SQL</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;