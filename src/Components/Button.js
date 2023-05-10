import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
    return (
        <Link to={"/"} className="button">
            <span> {text} </span>
            <div className="liquid"></div>
        </Link>
    );
};

export default Button;
