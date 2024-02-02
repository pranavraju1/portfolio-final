import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // below function is from the documentation
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hx635mh",
        "template_wti2aez",
        formRef.current,
        "jj_itc5bIpcyNelFZ"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div div className="contact">
      <div div className="textContainer">
        <h1 h1 >Let's work together</h1>
        <div div className="item">
          <h2>Mail</h2>
          <span>pranavraju2020@gmail.com</span>
        </div>
        <div div className="item">
          <h2>Address</h2>
          <span>Seara Apts Chicalim, Vasco, Goa, India </span>
        </div>
        <div div className="item">
          <h2>Phone</h2>
          <span>+91 8668315718</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
        </form>
        {error && 'Error'}
        {success && 'Success'}
      </div>
    </div>
  );
};

export default Contact;
