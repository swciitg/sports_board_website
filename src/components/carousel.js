import React, { useEffect, useRef, useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import img1 from "../images/hm.png";
import { useLocation } from "react-router-dom";
import BackgroundSlider from "react-background-slider";
const Navbar = (props) => {
  const [open,setOpen] = useState(false);
  const ref=useRef();
  const {pathname}=useLocation();
  useEffect(()=>{
    if(pathname==="/clubs"||pathname==="/events"){
      ref.current.style.position='relative';
    }
    else{
      ref.current.style.position='sticky';
      ref.current.style.top='0';
    }
  })
  
  return (

    <div ref={ref}>
              <div className="nav">
                 <div className="topnav">
             

                   <NavLink to="/contacts" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Contacts</NavLink>
                  <NavLink to="/clubs" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Clubs</NavLink>
                  <NavLink to="/events" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Events</NavLink>
                  <NavLink  to="/"   style={isActive => ({
    color: isActive ? "white" : "blue"})}> Home </NavLink>
             
               
               </div>




               <div className="find"> 
                <a className="inactive" href="#"> SPORTS BOARD</a>
                <a className="inn" href="#">IIT GUWAHATI </a>
              </div>
           <div className="align">   <h3 className="texting">{props.name}</h3>
                <h6 className="text">{props.slogan}</h6>
        </div>
          <div className="tomp">
              </div>
        </div>
        
          <div className="navigation">
            <div className="mainbar">
            <div className="logosm">
            <a className="inactivesm" href="#"> SPORTS BOARD</a>
                <a className="innsm" href="#">IIT GUWAHATI </a>
              
            </div>

        
            <div className="dropdown">
            <div className="dropbtn"  onClick={()=>{setOpen(!open)}}>
                <h>  <GiHamburgerMenu /></h>
            </div>

            <div className={`dropdown-menu ${open ? 'active': 'inactive'}`}>
            <div  className="dropdown-content">
            <NavLink  to="/"   style={isActive => ({
    color: isActive ? "black" : "green"})}> Home </NavLink>
                  <NavLink to="/events" style={isActive => ({
    color: isActive ? "black" : "green"})}>Events</NavLink>
                  <NavLink to="/clubs" style={isActive => ({
    color: isActive ? "black" : "green"})}>Clubs</NavLink>
                  <NavLink to="/contacts" style={isActive => ({
    color: isActive ? "black" : "green"})}>Contacts</NavLink>
             
             </div>
            </div>
        </div>
             
        </div>
          </div>
          <div className="bodys">
            
           <div className="bodyss"> <span> {props.name}</span></div>
            <div className="bodysss">{props.slogan}
           
            </div>         
            </div>
          <div className="last">
                      <div className="div_image"></div>
          </div>
       
    </div>
  )
}
export default Navbar;
