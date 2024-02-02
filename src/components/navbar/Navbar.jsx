import "./navbar.scss";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const sendEmail = () => {
    let emailAdress = "pranavraju2020@gmail.com";
    let mailtoUrl = "mailto:" + emailAdress;
    window.location.href = mailtoUrl;
    console.log("trying to open");
  };
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ marginLeft: "30px" }}
        >
          👈 {"\u00A0\u00A0"}Navigate
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <IoIosMail
            style={{
              height: "30px",
              width: "30px",
              marginRight: "15px",
              cursor: "pointer",
            }}
            onClick={sendEmail}
          />
          <FaGithub
            style={{
              height: "30px",
              width: "30px",
              marginRight: "15px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://github.com/pranavraju1/type-test", "_blank")
            }
          />
          <FaLinkedin
            style={{
              height: "30px",
              width: "30px",
              marginRight: "15px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/pranav-raju-6362bb22b/",
                "_blank"
              )
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
