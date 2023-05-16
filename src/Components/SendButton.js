import React from "react";
import { BsFillSendFill } from 'react-icons/bs'

const SendButton = () => {
    return (
        <button className="send" type="submit">
            <div className="wrapper">
                <BsFillSendFill className="bi" />
            </div>
            <span>Enviar</span>
        </button>
    );
};

export default SendButton;
