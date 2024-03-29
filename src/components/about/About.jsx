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
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const About = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
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
            <div title="HTML" className="item">
              <PiFileHtmlBold className="icon" />
            </div>
            <div title="CSS" className="item">
              <PiFileCssBold className="icon" />
            </div>
            <div title="JavaScript" className="item">
              <RiJavascriptLine className="icon" />
            </div>
            <div title="React" className="item">
              <FaReact className="icon" />
            </div>
            <div title="NodeJs" className="item">
              <FaNode className="icon" />
            </div>
            <div title="Sass" className="item">
              <FaSass className="icon" />
            </div>
            <div title="Bootstrap" className="item">
              <FaBootstrap className="icon" />
            </div>
            <div title="Java" className="item">
              <FaJava className="icon" />
            </div>
            <div title="C++" className="item">
              <SiCplusplus className="icon" />
            </div>
          </div>
          <h3 style={{ color: "orange", fontSize: "30px" }}>Platform : </h3>
          <div className="platform">
            <div title="VS Code" className="item">
              <TbBrandVscode className="icon" />
            </div>
            <div title="Github" className="item">
              <FaGithub className="icon" />
            </div>
            <div title="Postman" className="item">
              <SiPostman className="icon" />
            </div>
            <div title="Firebase" className="item">
              <IoLogoFirebase className="icon" />
            </div>
            <div title="MongoDB" className="item">
              <SiMongodb className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
