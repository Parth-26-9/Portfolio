import React from 'react'
import './Projects.css'
import { ImExit } from 'react-icons/im';
import BarLoader from "react-spinners/BarLoader";
import {Link,Routes,Route,useNavigate} from 'react-router-dom'
import {useEffect,useState} from "react"
function Projects() {
 
  const navigate = useNavigate()
function handleExit()
{
  navigate('/home')
}
const [loading,SetLoading]=useState(false);

  
useEffect(()=>{
  SetLoading(true)
  setTimeout(()=>{
    SetLoading(false);
  },3000)
},[])

function handleDemo()
{
  window.open("https://lustrous-belekoy-039d45.netlify.app/")
}
function handleCRUDCode()
{
  window.open("https://github.com/Parth-26-9/React-CRUD-App")
}
function handleVideo()
{
  window.open("https://www.linkedin.com/feed/update/urn:li:activity:7199045304665411584/")
}
function handleECode()
{
  window.open("https://github.com/Parth-26-9/MERN-PROJECTS/tree/main/E%20Commerce%20Website")
}
function handleMovieWebsiteVideo()
{
  window.open("https://www.linkedin.com/posts/parth-bhatti-a409a0246_create-responsive-movie-website-using-react-activity-7043546880537968640-U6Do?utm_source=share&utm_medium=member_desktop")
}
function handleMovieCode()
{
  window.open(" https://lnkd.in/dc-cNPYx")
}

return (
  <>
    {
      loading ?
      <BarLoader
      color={"#FFEE00"}
      loading={loading}
      // cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      
      :
      <div className="ThisContainer">
      <div className="card">
      <ImExit className='exit-button' onClick={handleExit} style={{color:"cyan"}}/>
        <img src="https://reactjsexample.com/content/images/2021/09/notes-app-react.jpg" alt="" />
        <h1>NoteApp</h1>
        <h1>React</h1>
        <div className="button-section">
        <button className='demo' onClick={handleDemo}>Demo</button>
        <button className='code' onClick={handleCRUDCode}>Code</button>
        </div>
      </div>
      <div className="card">
      <ImExit className='exit-button' onClick={handleExit} style={{color:"cyan"}}/>
        <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" alt="" />
        <h1>E Commerce Website</h1>
        <h1>MERN Stack</h1>
        <div className="button-section">
        <button className='demo' onClick={handleVideo}>Video</button>
        <button className='code'>Code</button>
        </div>
      </div>
      <div className="card">
      <ImExit className='exit-button' onClick={handleExit} style={{color:"cyan"}}/>
        <img src="https://user-images.githubusercontent.com/106135144/196727097-50c0ae49-b92f-4aa9-bdcb-30d978a44125.png" alt="" />
        <h1>Movie Website</h1>
        <h1>React</h1>
        <div className="button-section">
        <button className='demo' onClick={handleMovieWebsiteVideo}>Demo</button>
        <button className='code' onClick={handleMovieCode}>Code</button>
        </div>
      </div>
    </div>
    }
 
  </>
  )
}

export default Projects