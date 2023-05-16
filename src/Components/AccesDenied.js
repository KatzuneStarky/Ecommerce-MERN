import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate, useLocation } from "react-router-dom";

const AccesDenied = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate("/sesion", {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])
    

    return (
        <div className="accessDenied" style={{ height: "100vh" }}>
            <h1>Acceso denegado, redirigiendo en</h1>
            <h2> {count} segundos </h2>
            <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_ulpSKlGL79.json"
                style={{ height: "600px", width: "600px" }}
            ></Player>
        </div>
    );
};

export default AccesDenied;
