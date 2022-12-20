import vert from '../images/vert.svg';
import hori from '../images/hori.svg';
import {useRef} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import './clubs.css';
import { useEffect } from 'react';
import {motion} from 'framer-motion';

import  fullHori from '../images/fullHori.svg';





const Clubs = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);

  const homepage_logo_main_content = useRef(null);
  function animate_svg_on_scroll(value) {
    
    var homepage_logo_main_content_total_length = homepage_logo_main_content.current.getTotalLength(); // Getting the total length of the SVG path.
    homepage_logo_main_content.current.style.strokeDasharray = homepage_logo_main_content_total_length; // Get the starting position of the draw.
    homepage_logo_main_content.current.style.strokeDashoffset = homepage_logo_main_content_total_length;
    var draw = homepage_logo_main_content_total_length * value;
    homepage_logo_main_content.current.style.strokeDashoffset =
      homepage_logo_main_content_total_length - draw;
  }
  
  useEffect(() => {
    const handleScroll = (event) => {
      const value = (-2000) +    (window.scrollY)/4650 ;
      animate_svg_on_scroll(value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
   window.removeEventListener("scroll", handleScroll);
    };
  }, []);
/*function Section({children}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          
        }}
      >
        {children}
      </span>
    </section>
  );
}*/

const cardVariants = {
  offscreen: {
    
    opacity:0,
    y:50
    
  },
  onscreen: {
    y:5,
    rotate: 0,
    opacity:1,
    transition: {
      
      
      ease: "easeInOut",
      
      
      duration: 0.8,
    
    }
  }
};



/*const ref= useRef();
let pathLength;
let scrollPercentage;
let drawLength;
pathLength= ref.getTotalLength()
ref.style.strokeDasharray = pathLength + '' + pathLength;
ref.style.strokeDashoffset = pathLength;

const Scroll = () =>{

  scrollPercentage = (ref.refElement.scrollTop + ref.body.scrollTop )/(ref.refElement.scrollHeight - ref.refElement.clientHeight);
  drawLength = pathLength * scrollPercentage;
  ref.style.strokeDashoffset = pathLength - drawLength;

}*/
/*let path = document.querySelector('path')
let pathLength = document.getTotalLength();

path.style.strokeDasharray = pathLength +''+ pathLength;
path.style.strokeDashoffset= pathLength;

window.addEventListener('scroll',() => {
  var scrollPercentage = (document.documentElement.scrollTop + document.body )*/
  
//})
//const ref = useRef(null);
//const isInView = useInView(ref);

  
  return (

   
<div class="bg-neutral-100">  
<div class=" flex justify-center w-full  geet1 relative" data-aos-easing="ease" w-full>
          
    <svg  class=" absolute  pt-40  md:pt-16 w-3/5  h-auto lg:w-auto border-dashed"  width="738" height="3322" viewBox="0 0 738 3322" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path   ref={homepage_logo_main_content} d="M418 2L42.5 177L521.5 482L42.5 692L549.5 1076L42.5 1365.5L735.5 1694.5L2 1956.5L597 2229.5L75 2520.5L630.5 2788L33.5 3061L380.5 3320" stroke="#9B9B9B" strokeWidth="3.5" strokeLinejoin="round" strokeDasharray="50"/>
    </svg>

  <div class="flex flex-row w-screen justify-evenly items-center " >
    <div class="w-1/3 m-8 flex flex-col gap-y-36 items-center justify-evenly ">
   <motion.div class="group relative "
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
          <img  data-aos="fade-up" class="mt-60 "   src={vert} alt ="my aqua team"/>
         <div class="text-xl md:text-2xl lg:text-3xl absolute top-60 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold">
          AQUATICS CLUB
        </div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          02
        </div>
     </motion.div>
    
    
    <motion.div class="relative group"
        initial={{opacity:0, y:50,}} 
        whileInView={{opacity:1,y:10}}    
        transition={{
          ease:"easeIn",
           bounce:0.4,
          duration:0.4
        }}
        whileHover={{scale:1.05}}
        viewport={{amount:0.25}}>
         <img data-aos="fade-up"  class=""  src={hori} alt ="my aqua team"/>
        <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          ATHELETICS CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          04
        </div>
     </motion.div>
   
    
     

  
    <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={vert} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          VOLLEYBALL CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          05
        </div>
     </motion.div>
    <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          LAWN TENNIS CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          07
        </div>
     </motion.div>

     <motion.div class="group relative "
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img  data-aos="fade-up" class=" "   src={vert} alt ="my aqua team"/>
         <div class="text-xl md:text-2xl lg:text-3xl absolute top-4 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold">
          FOOTBALL CLUB
        </div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          09
        </div>
     </motion.div>

     <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          SQUASH CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          11
        </div>
     </motion.div>


    
    </div>
    <div class="w-1/3 flex  flex-col gap-y-32  items-center justify-evenly">
    <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class=" mt-36 "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-36 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          BASKETBALL CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          01
        </div>
    </motion.div>
    <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          HOCKEY CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          03
                  </div>
    </motion.div>
    <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={vert} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          VOLLEYBALL CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          05
        </div>
     </motion.div>
     <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
           CRICKET CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          07
        </div>
     </motion.div>

     <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>

         <img data-aos="fade-up" class="  "   src={vert} alt ="my aqua team"/>
         

         
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-14 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          TABLE TENNIS CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          08
        </div>
     
     </motion.div>

     <motion.div class="relative group"
         initial={{opacity:0, y:50}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={hori} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
           BADMINTON CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          10
        </div>
     </motion.div>

     <motion.div class="relative group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
         <img data-aos="fade-up" class="  "   src={vert} alt ="my aqua team"/>
         <motion.div class="text-xl md:text-2xl lg:text-3xl absolute top-3 duration-500 left-2 group-hover:opacity-100 opacity-0  text-white font-sans font-bold"
         transition={{type:'spring'}}>
          WEIGHTLIFTING CLUB
        </motion.div>
        <div class="text-4xl md:text-7xl lg:text-8xl absolute bottom-3 right-2 text-white font-bold font-sans group-hover:opacity-100 opacity-0 duration-500">
          12
        </div>
     </motion.div>
    </div>
  </div>
</div>

<div class=" geet2   ">
      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-right "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-left "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-right "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-left "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-right "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-left "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-right "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-left "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>

      <motion.div class= "group"
         initial={{opacity:0, y:50,}} 
         whileInView={{opacity:1,y:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
         <img data-aos="fade-up" class=" mt-12 mb-20 w-4/5  float-right "   src={fullHori} alt ="my aqua team"/>
         
      </motion.div>
      
     
    




  </div>
</div>  
  )
}
    
        
      
        
      
 

export default Clubs;
