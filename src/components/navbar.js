
import React, { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
  const [open,setOpen] = useState(false);

  return (
    <div>
              <div className="nav">
                 <div className="topnav">
                <a className="active" href="#home">Contacts</a>
                <a href="#news">Events</a>
                <a href="#contact">Clubs</a>
                <a href="#about">Home</a>
               
               </div>




               <div className="find"> 
                <a className="inactive" href="#"> Students Gymkhana Council</a>
                <a className="inn" href="#">IIT GUWAHATI </a>
              </div>
           <div className="align">   <h3 className="texting">Lorem Epsum</h3>
                <h6 className="text">Empowering athlets something something has to be written</h6>
        </div>
          <div className="tomp">
              </div>
        </div>
        
          <div className="navigation">
            <div className="mainbar">
            <div className="logosm">
            <a className="inactivesm" href="#"> Students Gymkhana Council</a>
                <a className="innsm" href="#">IIT GUWAHATI </a>
              
            </div>

        
            <div className="dropdown">
            <div className="dropbtn"  onClick={()=>{setOpen(!open)}}>
                <h>  <GiHamburgerMenu /></h>
            </div>

            <div className={`dropdown-menu ${open ? 'active': 'inactive'}`}>
            <div  className="dropdown-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Contact</a>
             </div>
            </div>
        </div>
             
        </div>
          </div>
          <div className="bodys">
            
           <div className="bodyss"> <span> Lorem Epsum</span></div>
            <div className="bodysss"><span> Empowering athlets something something has to be written</span>
           
            </div>         
            </div>
          <div className="last">

          </div>
       
    </div>
  )
}
export default Navbar;
