
import bg from '../images/Rectangle 351.png';
import hori from '../images/Group 89.png';
import { motion} from "framer-motion";
import mobHori from '../images/fullHori.svg';
import './animation.css'

/*const cardVariants: Variants = {
  offsitcreen: {
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
function Animation() {

  return (
    
    <div className="App">
    <div class="flex flex-col gap-4 mt-12 dnb">
      <div  class="flex relative">
      <div  class="">  
        <img  src={bg} className=" bg" alt="mY basket team"></img>
      </div>
     <div class="flex gap-8 absolute  textbox ">
       <motion.div class="relative group"
       initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
       <img src={hori} alt="basket" class="z-12 big"></img>
       <motion.div class=" text-xs sm:text-sm  md:text-xl lg:text-2xl w-11/12 absolute top-4 duration-500  opacity-0 group-hover:opacity-100   text-white font-sans font-bold uri"
         transition={{type:'spring'}}>
          BASKETBALL CLUB
        </motion.div>
        <div class=" md:text-5xl absolute md:bottom-3 sm:text-4xl text-3xl lg:text-6xl  text-white font-bold font-sans opacity-0 group-hover:opacity-100   duration-500 number">
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
          BASKETBALL
        </div>
        <div class=" lg:text-lg bhole1 h-64 md:text-base sm:text-sm">
            You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
            All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
        </div>
      </motion.div>
     </div>
     </div>
    
     <div  class="flex relative flex-row-reverse">
      <div  class="">  
        <img  src={bg} className=" bg" alt="my aqua team"></img>
      </div>
     <div class="flex gap-8 absolute  textbox flex-row-reverse">
       <motion.div class="relative group"
       initial={{opacity:0, x:100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
       <img src={hori} alt="basket" class=" z-12 big"></img>
       <motion.div class=" text-xs sm:text-sm  md:text-xl lg:text-2xl w-11/12 absolute top-4 duration-500 opacity-0 group-hover:opacity-100   text-white font-sans font-bold uri"
         transition={{type:'spring'}}>
          AQUATICS CLUB
        </motion.div>
        <div class=" md:text-5xl absolute md:bottom-3 sm:text-4xl text-3xl lg:text-6xl  text-white font-bold font-sans opacity-0 group-hover:opacity-100   duration-500 number">
          02
        </div>
      
      </motion.div>
      <motion.div initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}} class="flex flex-col sm:gap-3 gap-1">
        <div class="font-bold lg:text-5xl md:text-4xl sm:text-2xl">
          AQUATICS
        </div>
        <div class="lg:text-lg bhole1 h-64 md:text-base sm:text-sm">
            You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
            All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
        </div>
      </motion.div>
     </div>
     </div>

     <div  class="flex relative ">
      <div  class="">  
        <img  src={bg} className=" bg" alt="my basket team"></img>
      </div>
     <div class="flex gap-8 absolute  textbox ">
       <motion.div class="relative group"
       initial={{opacity:0, x:-100,}} 
         whileInView={{opacity:1,x:0}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}> 
       <img src={hori} alt="basket" class=" z-12 big"></img>
       <motion.div class=" text-xs sm:text-sm  md:text-xl lg:text-2xl w-11/12 absolute top-4 duration-500  opacity-0 group-hover:opacity-100   text-white font-sans font-bold uri"
         transition={{type:'spring'}}>
         FOOTBALL CLUB
        </motion.div>
        <div class=" md:text-5xl absolute md:bottom-3 sm:text-4xl text-3xl lg:text-6xl  text-white font-bold font-sans opacity-0 group-hover:opacity-100   duration-500 number">
          03
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
         viewport={{amount:0.25}} class="flex flex-col sm:gap-4 gap-1">
        <div class="font-bold lg:text-5xl md:text-4xl sm:text-2xl">
          BASKETBALL
        </div>
        <div class="lg:text-lg bhole1 h-64 md:text-base sm:text-sm">
            You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
            All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
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
         <img class=" mt-12 mb-20 w-4/5  float-right "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-left "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-right "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-left "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-right "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-left "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-right "   src={mobHori} alt ="my aqua team"/>
         
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
         <img class=" mt-12 mb-20 w-4/5  float-left "   src={mobHori} alt ="my aqua team"/>
         
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
         <img  class=" mt-12 mb-20 w-4/5  float-right "   src={mobHori} alt ="my aqua team"/>
         
      </motion.div>
      
     
    




  </div>
    </div>
  
  );
}

export default Animation;