import React from "react";
import LayoutComp from "../Components/Layout/layoutComp";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
    return (
        <LayoutComp title={"Omamori Shop - About Us"}>
            <section className="about">
                <div className="main">
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/packages/lf20_v1yudlrx.json"
                        className="lottie"
                    ></Player>
                    <div className="all-text">
                        <h4>About Us</h4>
                        <h1>All of the anime and kpop merch that you need</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.{" "}
                        </p>
                    </div>
                </div>
            </section>
        </LayoutComp>
    );
};

export default About;
