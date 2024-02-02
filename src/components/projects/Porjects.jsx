import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import typtetest from "../../../public/typetest.png";
import typtetest from "/typetest.png";
import podcast from "/podcast.png";
const items = [
  {
    id: 1,
    title: "Type Master",
    img: typtetest,
    desc: "Created a Typing-Test platform where users can test their typing skills. The platform consists of different themes and timers to choose from. Implemented the feature to get statistics at the end of the test in the form of graphs. The platform also interacts with Firebase for services such as authentication and storage ",
  },
  {
    id: 2,
    title: "Podcast App",
    img: podcast,
    desc: "Designed a personalized platform for storing podcasts and their related episodes. Implemented features like recording and uploading of episodes. The platform also interacts with Firebase for services such as authentication and storage.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const redirect = (id) => {
    id == 1
      ? window.open("https://type-master-pranav.netlify.app/")
      : id == 2
      ? window.open("https://podcast-react-pranav.netlify.app/")
      : "";
  };
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => redirect(item.id)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Porjects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  // 100% -> 0%
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Porjects;
