import React from "react";
import { NavLink } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai'
import { BiCategory, BiUserPlus, BiLogIn, BiCartAlt } from 'react-icons/bi'

const Navbar = () => {
    return (
        <ul className="navBarList">
            <li>
                <NavLink to={"/"}>
                    <div className="icon">
                        <AiTwotoneHome className="fa" />
                        <AiTwotoneHome className="fa" />
                    </div>
                    <div className="name">
                        Home
                    </div>
                </NavLink>
            </li>

            <li>
                <NavLink to={"/category"}>
                    <div className="icon">
                        <BiCategory className="fa" />
                        <BiCategory className="fa" />
                    </div>
                    <div className="name">Category</div>
                </NavLink>
            </li>

            <li>
                <NavLink to={"/cart"}>
                    <div className="icon">
                        <BiCartAlt className="fa" />
                        <BiCartAlt className="fa" />
                    </div>
                    <div className="name">Cart(0)</div>
                </NavLink>
            </li>

            <li>
                <NavLink to={"/sesion"}>
                    <div className="icon">
                        <BiLogIn className="fa" />
                        <BiLogIn className="fa" />
                    </div>
                    <div className="name">Iniciar Sesion</div>
                </NavLink>
            </li>
        </ul>
    );
};

export default Navbar;
