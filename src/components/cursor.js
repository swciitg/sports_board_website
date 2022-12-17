import { useEffect, useState } from "react";
import "./cursor.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 ,opacity: 0 });


  useEffect(() => {
    const mousemove = (e) => {
      const targ=e.target.className;
      if((targ == "imggrid")|| (targ == "gridimg")|| (targ == "flex overflow-x-hidden cursor-grab")){
        setlargecircle({ x: e.clientX, y: e.clientY ,opacity:0.9 });
      }
      else{
        setlargecircle({x:0 ,y:0, opacity: 0 });
      }
      
 
    };
    window.addEventListener("mousemove", mousemove);
    const pagemove = (e) => {
      setlargecircle({x:0 ,y:0, opacity: 0 });
    }
    window.addEventListener("scroll",pagemove)
  },[]);

  return (
    <>
    <div className="overall_cursor">
      <motion.div
        initial={{opacity:0}}
        animate={{
          x: largecircle.x ,
          y: largecircle.y,
          transition: { type: "spring", mass:0.4 },
          opacity: largecircle.opacity,
        }}
        exit={{ opacity: 0 }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 ,display:"flex", alignItems:"center" , justifyContent:"center"}} whileInView={{scale: 1.2, transition:{ duration:0.5}}}>drag</motion.div>
    </div>
  </>
  );
};

export default Cursor;