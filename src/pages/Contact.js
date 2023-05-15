import React, { useRef, useState } from "react";
import LayoutComp from "../Components/Layout/layoutComp";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import Map from "../Components/Map";
import credencials from "../Utils/Credencials";
import SocialMedia from "../Components/SocialMedia";
import SendButton from "../Components/SendButton";
import emailjs from "@emailjs/browser";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credencials.mapsKey}`;

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jlh1ltk",
        "template_fxc2y9p",
        e.target,
        "p2fJQpADHS6h1KodU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      showResult(true)
  };

  return (
    <LayoutComp title={"Omamori Shop - Contact Us"}>
      <div className="contactUs">
        <div className="tittle">
          <h2>Get in touch</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Send a message</h3>

            <form onSubmit={sendEmail}>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First name</span>
                    <input type="text" placeholder="First name" name="fName" />
                  </div>

                  <div className="inputBox">
                    <span>Last name</span>
                    <input type="text" placeholder="Last name" name="lName" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="email@email.com" name="email" />
                  </div>

                  <div className="inputBox">
                    <span>Phone</span>
                    <input type="text" placeholder="+52 123 456 7890" name="phone_number" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea name="message" placeholder="Type your message here..."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <SendButton />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h3>Contact info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <HiLocationMarker />
                </span>
                <p>
                  La paz, Baja California Sur <br /> México
                </p>
              </div>

              <div>
                <span>
                  <AiTwotoneMail />
                </span>
                <Link to={"mailto:omamorishop@gmail.com"}>
                  omamorishop@gmail.com
                </Link>
              </div>

              <div>
                <span>
                  <AiTwotonePhone />
                </span>
                <Link to={"tel:+526123050906"}>+52 612 305 0906</Link>
              </div>

              <SocialMedia />
            </div>
          </div>
          <div className="contact map">
          </div>
        </div>
      </div>
    </LayoutComp>
  );
};

export default Contact;
