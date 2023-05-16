import React, { useState } from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    const forgotSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/sesion");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal");
        }
    };

    return (
        <LayoutComp title={"Olvide mi contraseña - Omamori Shop"}>
            <div className="container p-5 forgot">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_iwyr6aqu.json"
                            style={{ height: "600px", width: "600px" }}
                        ></Player>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-5 inputs">
                        <h2 className="pt-5 mt-5 main-text">Olvidaste tu contraseña</h2>
                        <form onSubmit={forgotSubmit}>
                            <div className="d-flex flex-row ml-5">
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    className="form-control main-input mt-4"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Ingresa tu palabra secreta"
                                    className="form-control main-input mt-4"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                />
                            </div>
                            <input
                                type="password"
                                placeholder="Ingresa tu nueva contraseña"
                                className="form-control main-input mt-4"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <div className="fButtons">
                                <div className="pt-4 m-2">
                                    <button type="submit" className="btn btn-sz-primary">Actualizar contraseña</button>
                                </div>
                                <div className="pt-4 m-2">
                                    <Link to={"/sesion"} className="btn btn-sz-primary">Regresar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutComp>
    );
};

export default ForgotPassword;
