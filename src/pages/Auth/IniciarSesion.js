import React, { useState } from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import SocialMedia from "../../Components/SocialMedia";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useAuth } from "../../Context/Auth";

const IniciarSesion = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isActive, setActive] = useState("false");
    const [answer, setAnswer] = useState("");
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate();
    const location = useLocation()

    const ToggleClass = () => {
        setActive(!isActive);
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer
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
                setAuth({
                    ...auth,
                    user: result.data.user,
                    token: result.data.token
                })
                localStorage.setItem("auth", JSON.stringify(result.data))
                navigate(location.state || "/");
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
            <div
                className={
                    isActive ? "sesionContainer right-panel-active" : "sesionContainer"
                }
                id="main"
            >
                <div className="signUp">
                    <form onSubmit={registerSubmit}>
                        <h1>Crear una cuenta</h1>
                        <div className="social-container">
                            <SocialMedia />
                        </div>
                        <p>Tenemos venta de articulos varios de anime y kpop</p>
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

                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Ingresa una palabra secreta"
                            required
                        />
                        <div className="buttons">
                            <button type="submit" className="submit" onClick={() => navigate("/forgot-password")}>
                                Olvide mi contraseña
                                <span>
                                    <AiOutlineArrowRight />
                                </span>
                            </button>

                            <button type="submit" className="submit">
                                Registrarse
                                <span>
                                    <AiOutlineArrowRight />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="signIn">
                    <form onSubmit={loginSubmit}>
                        <h1>Iniciar Sesion</h1>
                        <div className="social-container">
                            <SocialMedia />
                        </div>
                        <p>Tenemos venta de articulos varios de anime y kpop</p>
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
                        <button type="submit" className="submit">
                            Iniciar Sesion
                            <span>
                                <AiOutlineArrowRight />
                            </span>
                        </button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Bienvenid@ de vuelta</h1>
                            <p>Para seguir conectado con nosotros favor de iniciar sesion</p>
                            <button id="signIn" onClick={ToggleClass}>
                                <div className="wrapper">
                                    <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/29037.png" alt="" />
                                </div>
                                <span>Iniciar Sesion</span>
                            </button>
                        </div>
                        <div className="overlay-right">
                            <h1>Que tal!</h1>
                            <p>
                                Ingresa tu informacion para darte de alta en nuestro sistema
                            </p>
                            <button id="signUp" onClick={ToggleClass}>
                                <div className="wrapper">
                                    <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/29037.png" alt="" />
                                </div>
                                <span>Registrarse</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComp>
    );
};

export default IniciarSesion;
