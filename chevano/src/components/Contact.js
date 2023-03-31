import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

function Contact() {
  const[name, setName] = useState("");
  const[address, setAddress] = useState("");
  const[phone, setPhone] = useState("");
  const[message, setMessage] = useState("");

  const form = useRef();

  const handleChangeName = ( event ) => {
    setName( event.target.value );
  }

  const handleChangeAddress = ( event ) => {
    setAddress( event.target.value );
  }

  const handleChangePhone = ( event ) => {
    setPhone( event.target.value );
  }

  const handleChangeMessage = ( event ) => {
    setMessage( event.target.value );
  }

  const sendEmail = ( e ) => {
    e.preventDefault();

    emailjs.sendForm("service_utc0jh1", "template_a9ar1ol", form.current, "JzNNTmUPpmc9bPdkv")
    .then( (result) => {
      console.log( result.text );
    }, ( error ) => {
      console.log( error.text );
    });
    setName("");
    setAddress("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <h1 className="heading text-center">Contact Us</h1>
      <div className="_container">
        <div className="left-side">
          <div className="address details mb-3">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">115 Linden Blvd</div>
            <div className="text-two">Queens, NY 11412</div>
          </div>

          <div className="phone details">
            <i className="fas fa-phone"></i>
            <div className="topic">Phone</div>
            <div className="text-one">(845) 637 - 4520</div>
          </div>

          <div className="email details ml-3">
            <i className="fa-solid fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">chevanogordon@gmail.com</div>
          </div>

          <div className="store-hours details">
            <i className="fa-solid fa-clock"></i>
            <div className="topic">Store Hours</div>
            <div className="text-one">Mon - Sat: 8am - 8pm</div>
            <div className="text-two">Sun: 10am - 6pm</div>
          </div>
        </div>

        <div className="vl"></div>

        <div className="right-side">
        <div className="topic-text">Send us a message</div>
          <p>
            Please send us a message for any query you may have, 
            whether their was a problem with your order or you want 
            to place a special order for that special trip we will make it happen.
            Our team would be more than delighted to address your need(s), 
            you can reach us at the contact information provided or by filling 
            our the form below.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input 
                type="text" 
                className="field form-control" 
                placeholder="Enter Full Name" 
                name="user_name" 
                onChange={ handleChangeName }
                value={ name }
              />
            </div>
            <div className="input-box">
              <input 
                type="email" 
                className="field form-control" 
                placeholder="Enter Email Address" 
                name="user_email" 
                onChange={ handleChangeAddress }
                value={ address }
              />
            </div>
            <div className="input-box">
              <input 
                type="number" 
                className="field form-control" 
                placeholder="Enter Phone Number" 
                name="user_number"
                onChange={ handleChangePhone }
                value={ phone } 
              />
            </div>
            <div className="input-box message-box">
              <textarea 
                className="field form-control" 
                placeholder="Message" 
                name="message"
                rows="5"
                cols="30"
                onChange={ handleChangeMessage }
                value={ message } 
              />
            </div>
            <div>
              <input className="btn btn-danger" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;