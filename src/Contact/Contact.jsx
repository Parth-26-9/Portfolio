import React from 'react'
import './Contact.css'
import { ImExit } from 'react-icons/im';
import {Link,Routes,Route,useNavigate} from 'react-router-dom'
import MoonLoader from "react-spinners/MoonLoader";
import { useState,useEffect } from 'react';
function Contact() {

  const [loading,SetLoading]=useState(false);
  const navigate = useNavigate();

function handleExit()
{
  navigate('/home')
}
  
useEffect(()=>{
  SetLoading(true)
  setTimeout(()=>{
    SetLoading(false);
  },3000)
},[])

  return (
    <div className='myCont'>
    {
        loading ?
        <MoonLoader
        color={"#FFEE00"}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        :
      <div className="Container">
        <ImExit className='exit-button' onClick={handleExit}/>
        <div className="row">
          <h1>Contact Me!</h1>
        </div>
        <div className="row">
          <h4 style={{textAlign: 'center'}}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{float: 'right'}}>
              <input type="text" required />
              <label>Phone Number</label> 
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>
      }    
    </div>
  )
}

export default Contact