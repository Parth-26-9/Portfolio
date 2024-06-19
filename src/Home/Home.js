import React, { useRef, useState,useEffect } from "react";
import "./Home.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Typical from "react-typical";
import { Sling as Hamburger } from "hamburger-react";
import Media from "react-media";
import {Link,Routes,Route,useNavigate} from 'react-router-dom'
import Contact from "../Contact/Contact";
import { ImExit } from 'react-icons/im';
import HashLoader from "react-spinners/HashLoader";
function Home() {
  const [loading,SetLoading]=useState(false);
  useEffect(()=>{
    SetLoading(true)
    setTimeout(()=>{
      SetLoading(false);
    },3000)
  },[])
    const [showMediaIcons,SetShowMediaIcons]=useState(false);
    const navigate = useNavigate();
    function handleContact()
    {
    
        navigate('/contact')
    }
    function handleExit()
    {
      navigate('/login')
    }
    return (
    <>
    {
      loading ?
      <HashLoader
      color={"#FFEE00"}
      loading={loading}
      // cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      :
<div className="MyContainer" id="MyContainer">
      <div className={showMediaIcons ? "left-part responsive-part": "left-part"}>
        {/* <div className="left-part-upper responsive-part-upper"> */}
          <div className={showMediaIcons ? "left-part-upper responsive-part-upper":"left-part-upper"}>
          <img
            src="https://cdn.dribbble.com/users/434375/screenshots/16829581/media/e1ec0140cea1d0d17428c74e4dccce7c.jpg?compress=1&resize=400x300&vertical=top"
            width="95%"
            height="100%"
            alt=""
          />
          <h2 className="logo-text">Parth</h2>
          <p className="logo-text2">Web Developer</p>
        </div>
        {/* <div className="left-part-middle-section responsive-part-middle-section"> */}
          <div className={showMediaIcons ? "left-part-middle-section responsive-part-middle-section":"left-part-middle-section"}>
          <div className="blank-section"></div>
          <div className="blank-section-home">
            <h3><Link to="/home" style={{textDecoration:'none',color:'#827d7d'}}>Home</Link></h3>
          </div>
          <div className="blank-section-skills">
          <h3><Link to="/skills" style={{textDecoration:'none',color:'#827d7d'}}>Skills</Link></h3>
          </div>
          <div className="blank-section-project">
          <h3><Link to="/projects" style={{textDecoration:'none',color:'#827d7d'}}>Projects</Link></h3>
          </div>
          <div className="blank-section-aboutme">
          <h3><Link to="/aboutme" style={{textDecoration:'none',color:'#827d7d'}}>About Me</Link></h3>
          </div>
          <div className="blank-section-contact">
          <h3><Link to="/contact" style={{textDecoration:'none',color:'#827d7d'}}>Contact</Link></h3>
          </div>
      {/* <ImExit className='exitButton' onClick={handleExit}/> */}
        </div>
      </div>
      <div className="right-part"> 
        <div id="hamburger-menu" onClick={()=>{
          SetShowMediaIcons(!showMediaIcons);
        }}>
          <Hamburger
            size={50}
            direction={"right"}
            duration={1}
            distance="lg"
            color="#4FD1C5"
            easing="ease-in"
          />
        </div>
        <div className="heading-part" id="heading-part">
          <h1 className="hi">Hi</h1>
          <h1>
            I'm <span className="parth">Parth,</span>
          </h1>
          <h2>
            <span className="web" id="web">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Programmer 🧑‍💻",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "BCA Student",
                  1000,
                ]}
              />
            </span>
          </h2>
        </div>
        <div className="middle-text" id="middle-text">
          <p>Full Stack Developer</p>
        </div>
        <div className="end-button-section" id="end-button-section">
          {/* <ImExit className='exitButton' onClick={handleExit}/> */}
            {/* <div className="left"></div> */}
          <button className="logout-button" onClick={handleExit}>
              Logout
          </button>
            {/* <div className="right"></div> */}
        </div>
      </div>
    </div>
    }
    
    </>
);
}

export default Home;
