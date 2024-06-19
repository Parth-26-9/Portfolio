import React, { useState } from 'react'
import './App.css'
import Login_Page from './Login_Page/Login_Page'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import AboutMe from './AboutMe/AboutMe'
import { useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {

  const [loading,SetLoading]=useState(false)

  useEffect(()=>{
    SetLoading(true)
    setTimeout(()=>{
      SetLoading(false)
    },3000)
  },[])


  const navigate = useNavigate()  
    function handleClick(e)
    {
      document.querySelector('.mybtn').style.display='none';
      navigate('/login')
    }
    return (
      <div className='cont'>
      {
         loading ?
         <ClimbingBoxLoader
         color={"#FFEE00"}
         loading={loading}
         // cssOverride={override}
         size={40}
         aria-label="Loading Spinner"
         data-testid="loader"
         />
        :
        <div>
          <button onClick={handleClick} className="mybtn">Let's Go</button>
          <Routes>
            <Route path='/login' element={<Login_Page/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/aboutme' element={<AboutMe/>}></Route>
          </Routes>
        </div>
      }
      {/* <button onClick={handleClick} className="mybtn">Let's Go</button>
    <div>
      <Routes>
        <Route path='/login' element={<Login_Page/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
      </Routes>
    </div> */}
    </div>
  )
}

export default App