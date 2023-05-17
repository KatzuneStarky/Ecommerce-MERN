import React from "react";
import { NavLink } from "react-router-dom";
import { AiTwotoneHome, AiOutlineLogout, AiFillDashboard, AiOutlineUser } from 'react-icons/ai'
import { BiCategory, BiLogIn, BiCartAlt } from 'react-icons/bi'
import { useAuth } from "../Context/Auth";

const Navbar = () => {
    const [auth, setAuth] = useAuth()

    const handleLogout = () =>{
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem("auth")
    }
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

            {
                !auth.user ? (
                    <li>
                        <NavLink to={"/sesion"}>
                            <div className="icon">
                                <BiLogIn className="fa" />
                                <BiLogIn className="fa" />
                            </div>
                            <div className="name">Iniciar Sesion</div>
                        </NavLink>
                    </li>
                ): (
                    <>
                        <li>
                            <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin': 'user' }`}>
                                <div className="icon">
                                    <AiFillDashboard className="fa" />
                                    <AiFillDashboard className="fa" />
                                </div>
                                <div className="name">Dashboard</div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin': 'user' }/profile`}>
                                <div className="icon">
                                    <AiOutlineUser className="fa" />
                                    <AiOutlineUser className="fa" />
                                </div>
                                <div className="name">{auth?.user?.name}</div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/"} onClick={handleLogout}>
                                <div className="icon">
                                    <AiOutlineLogout className="fa" />
                                    <AiOutlineLogout className="fa" />
                                </div>
                                <div className="name">Cerrar Sesion</div>
                            </NavLink>
                        </li>
                    </>
                )
            }
        </ul>
    );
};

export default Navbar;
