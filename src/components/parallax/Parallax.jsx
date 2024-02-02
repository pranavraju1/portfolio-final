import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start start','end start']
    // animation starts when top of the element reaches the top of the viewport 
    //and the animation ends when bottom of the element reaches the top of the viewport
  })

  const yBg = useTransform(scrollYProgress,[0,1],['0%','100%'])
  // value is calculated between 0 and 1 if 0 -> 0% and if 1 -> 100%

  const yText = useTransform(scrollYProgress,[0,1],['0%','500%'])


  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #140616, #4C035E )"
            : "linear-gradient(180deg, #4C035E, #140616 )",
      }}
    >
      <motion.h1 style={{y:yText}}>{type === "about" ? "About Me" : "Projects"}</motion.h1>
      <motion.div className="mountains" style={{backgroundImage: `url(${type === 'about' ? '/mountains.png':'/mountainsM.png'})`}}></motion.div>
      <motion.div className="planets" style={{y:yBg,
        backgroundImage: `url(${type === 'about' ? '/planets.png':'/sun.png'})`
      }}></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
