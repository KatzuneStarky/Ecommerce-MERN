import React from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import Navbar from "../Navbar";

const Header = () => {
    return (
        <>
            <nav className="navbar d-flex justify-content-between">
                <Link className="navbar-brand" to={"/"}>
                    <BsShop /> Omamori Shop
                </Link>

                <Navbar />
            </nav>
        </>
    );
};

export default Header;
