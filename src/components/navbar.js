
import React, { useEffect, useRef, useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import img1 from "../images/hm.png";
import { useLocation } from "react-router-dom";
const Navbar = (props) => {
  const [open,setOpen] = useState(false);
  const ref=useRef();
  const {pathname}=useLocation();
  const [index, setIndex] = React.useState(0);
  const colors = [img1,img1];
  const delay = 2500;
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
      ref.current.style.backgroundImage=colors[index];
    return () => {};
  }, [index]);
  useEffect(()=>{
    if(pathname==="/stud/gymkhana/sports/clubs"){
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
             

                   <NavLink to="/stud/gymkhana/sports/contacts" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Contacts</NavLink>
                  <NavLink to="/stud/gymkhana/sports/clubs" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Clubs</NavLink>
                  <NavLink to="/stud/gymkhana/sports/events" style={isActive => ({
    color: isActive ? "white" : "blue"})}>Events</NavLink>
                  <NavLink  to="/stud/gymkhana/sports/"   style={isActive => ({
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
            
           <div className="bodyss"> <span> Lorem Epsum</span></div>
            <div className="bodysss"> Empowering athlets something something has to be written
           
            </div>         
            </div>
          <div className="last">
                      <div className="div_image"></div>
          </div>
       
    </div>
  )
}
export default Navbar;
