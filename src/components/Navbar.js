import { Avatar } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import "./Navbar.css"
const Navbar = () => {
  const [show,setShow]=useState(false)
  useEffect(() => {
   window.addEventListener("scroll",()=>{
     if(window.scrollY>100){
       setShow(true)
     }else{
      setShow(false)
     }

   });
   return ()=>{
     window.removeEventListener("scroll",()=>{
       console.log("removed")
     });
   }
  }, [])
  
  return (
    <div className={`navbar ${show&& "navbar__black"}`}>
      <img className='navbar__logo' src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="" />
    </div>
  )
}

export default Navbar