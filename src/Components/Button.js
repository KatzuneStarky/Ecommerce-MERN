import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link,type }) => {
    return (
        <Link to={link} className="button" type={type}>
            <span> {text} </span>
            <div className="liquid"></div>
        </Link>
    );
};

export default Button;
