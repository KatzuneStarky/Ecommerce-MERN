import React, { useState } from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const IniciarSesion = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal");
        }
    };

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            if (result && result.data.success) {
                toast.success(result.data && result.data.message);
                navigate("/");
                console.log(result);
            } else {
                toast.error(result.data.message);
                console.log(result);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal");
        }
    };

    return (
        <LayoutComp title={"Iniciar Sesion - OmamoriShop"}>
            <div className="sesionContainer">
                <div className="singUp">
                    <form onSubmit={registerSubmit}>
                        <h1>Crear una cuenta</h1>
                        <div className="social-container">
                            <Link>
                                <AiFillFacebook />
                            </Link>
                            <Link>
                                <AiOutlineWhatsApp />
                            </Link>
                            <Link>
                                <BsTelegram />
                            </Link>
                            <Link>
                                <FaTiktok />
                            </Link>
                        </div>
                        <p>O usa tu email para el registro</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingresa tu nombre"
                            required
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />

                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ingresa tu numero telefonico"
                            required
                        />

                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Ingresa tu direccion"
                            required
                        />
                        <button type="submit">
                            <span>Registrarse</span>
                        </button>
                    </form>
                </div>

                <div className="singIn">
                    <form onSubmit={loginSubmit}>
                        <h1>Iniciar Sesion</h1>
                        <p>O usa tu email para el registro</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                        <button type="submit">
                            <span>Login</span>
                        </button>
                    </form>
                </div>
            </div>
        </LayoutComp>
    );
};

export default IniciarSesion;
