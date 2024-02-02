import "./about.scss";
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { RiJavascriptLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div className="bar"></div>
      <div className="content">
        <div className="text">
          <div className="about">
            <h1>Hi ! 👋</h1>
            <h2>
              I am Pranav Raju, a dynamic frontend developer based in Vasco,
              Goa, India.
            </h2>
            My journey revolves around acquiring and refining skills to excel in
            the ever-evolving field of frontend development. Fueled by a passion
            for creating seamless user experiences and a commitment to staying
            updated with industry trends.
          </div>
          <div className="pic">
            <img src="/about.png" alt="" />
          </div>
        </div>
        <div className="stack">
          <h3 style={{ color: "orange", fontSize: "30px" }}>Tech Stack : </h3>
          <div className="tech">
            <div className="item">
              <PiFileHtmlBold className="icon" />
            </div>
            <div className="item">
              <PiFileCssBold className="icon" />
            </div>
            <div className="item">
              <RiJavascriptLine className="icon" />
            </div>
            <div className="item">
              <FaReact className="icon" />
            </div>
            <div className="item">
              <FaSass className="icon" />
            </div>
            <div className="item">
              <FaBootstrap className="icon" />
            </div>
            <div className="item">
              <FaJava className="icon" />
            </div>
            <div className="item">
              <SiCplusplus className="icon" />
            </div>
          </div>
          <h3 style={{ color: "orange", fontSize: "30px" }}>Platform : </h3>
          <div className="platform">
            <div className="item">
              <TbBrandVscode className="icon" />
            </div>
            <div className="item">
              <FaGithub className="icon" />
            </div>
            <div className="item">
              <SiPostman className="icon" />
            </div>
            <div className="item">
              <IoLogoFirebase className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
