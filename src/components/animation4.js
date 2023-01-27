
import bg from '../images/Rectangle 351.png';
import hori from '../images/Group 89.png';
import { motion, Variants } from "framer-motion";
import './animation.css'
import ClubRnG from './clubRnG';
import React from 'react';
import { useEffect, useState } from "react";
/*const cardVariants: Variants = {
  offscreen: {
    x: 300
  },
  onscreen: {
    x: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};*/
function Animationfour(props) {
  console.log(props.info);
  return (
    <div className="App">
      <div  class="flex relative">
      <div  class="">  
        <img  src={bg} className=" bg"></img>
      </div>
     <div class="flex gap-8 absolute  textbox ">
       <motion.div className="relative group"
       initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
       <img src={hori} alt="basket" class=" z-12"></img>
       <motion.div class=" absolute  duration-500  group-hover:opacity-100 opacity-0  text-white font-sans font-bold name"
         transition={{type:'spring'}}>
          {props.info.Event_Name}
        </motion.div>
        <div class=" absolute  text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500 number">
          01
        </div>
      </motion.div>
      <motion.div initial={{opacity:0, x:100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}} class="flex flex-col sm:gap-3 gap-1">
        <div class="font-bold lg:text-5xl md:text-4xl sm:text-2xl">
        {props.info.Event_Name}
        </div>
        <div class=" lg:text-lg bhole1 h-64 md:text-base sm:text-sm">
           {props.info.Event_Slogan}
        </div>
      </motion.div>
     </div>
     </div> 
      
    </div>

  );
}

export default Animationfour;