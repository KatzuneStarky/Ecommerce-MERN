import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer">
                    <div className="sec aboutus">
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.{" "}
                        </p>
                        <SocialMedia />
                    </div>

                    <div className="sec quickLinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <Link to={"/Contact"}>Contact Us</Link>
                            </li>

                            <li>
                                <Link to={"/About"}>About Us</Link>
                            </li>

                            <li>
                                <Link to={"/Policy"}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copy">
                <p>Copyright &copy; 2023 Katzune Starky. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
