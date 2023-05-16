import React from "react";
import LayoutComp from "../Components/Layout/layoutComp";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "../Components/Button";
const PageNotFound = () => {
  return (
    <LayoutComp title={"Go Back - Not Found"}>
      <div className="pnf">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_j3gumpgp.json"
          style={{ height: "600px", width: "600px" }}
        ></Player>
        <h2>Ops! Page Not Found</h2>
        <Button text={"Go Back"} link={"/"} />
      </div>
    </LayoutComp>
  );
};

export default PageNotFound;
