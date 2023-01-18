
import bg from '../images/Rectangle 351.png';
import hori from '../images/Group 89.png';
import { motion, Variants } from "framer-motion";

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
function Animation() {

  return (
    
    <div className="App">
    <div class="flex flex-col gap-4">
      <div class="flex relative">
        <img  src={bg} class=""></img>
      <div class="flex gap-5 justify-center absolute top-24 left-48 ">
       <motion.div 
         initial={{opacity:0, x:-50,}} 
         whileInView={{opacity:1,x:-10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}>
        <img src={hori} alt="basket" class="w-11/12 pt-2 z-8"></img>
       </motion.div>
       <motion.div
         initial={{opacity:0, x:50,}} 
         whileInView={{opacity:1,x:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}
        class="flex flex-col gap-6">
        <div class="">
          <h1 class="text-5xl font-bold pt-4 text-left">BASKETBALL</h1>
        </div>
        <div class="">
          <p class="w-96 text-xl text-left">
             You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
             All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
          </p>
        </div>
       </motion.div>

      </div>
        
    </div>

    <div class="flex relative flex-row-reverse">
        <img  src={bg} class=""></img>
      <div class="flex gap-16 justify-center absolute top-24 left-48  flex-row-reverse ">
       <motion.div 
         initial={{opacity:0, x:50,}} 
         whileInView={{opacity:1,x:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
        <img src={hori} alt="basket" class="w-11/12 pt-2 z-8"></img>
       </motion.div>
       <motion.div
         initial={{opacity:0, x:-50,}} 
         whileInView={{opacity:1,x:-10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}
        class="flex flex-col gap-6">
        <div class="">
          <h1 class="text-5xl font-bold pt-4 text-left">BASKETBALL</h1>
        </div>
        <div class="">
          <p class="w-96 text-xl text-left">
             You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
             All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
          </p>
        </div>
       </motion.div>

      </div>
        
    </div>


    <div class="flex relative">
        <img  src={bg} class=""></img>
      <div class="flex gap-5 justify-center absolute top-24 left-48 ">
       <motion.div 
         initial={{opacity:0, x:-50,}} 
         whileInView={{opacity:1,x:-10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.25}}>
        <img src={hori} alt="basket" class="w-11/12 pt-2 z-8"></img>
       </motion.div>
       <motion.div
         initial={{opacity:0, x:50,}} 
         whileInView={{opacity:1,x:10}}    
         transition={{
           ease:"easeIn",
            bounce:0.4,
           duration:0.4,
         }}
         whileHover={{scale:1.05}}
         viewport={{amount:0.4}}
        class="flex flex-col gap-6">
        <div class="">
          <h1 class="text-5xl font-bold pt-4 text-left">BASKETBALL</h1>
        </div>
        <div class="">
          <p class="w-96 text-xl text-left">
             You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
             All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
          </p>
          
        </div>
       </motion.div>

      </div>
        
    </div>
    </div>
    </div>
  );
}

export default Animation;