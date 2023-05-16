import React from "react";
import { Link } from "react-router-dom";
import {
    AiFillFacebook,
    AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <ul className="socialMedia">
            <li>
                <Link to={"https://www.facebook.com/OmamoriShopAnimekpop"} target="_blank">
                    <AiFillFacebook />
                </Link>
            </li>
            <li>
                <Link to={""} target="_blank">
                    <AiOutlineWhatsApp />
                </Link>
            </li>
            <li>
                <Link to={""} target="_blank">
                    <BsTelegram />
                </Link>
            </li>
            <li>
                <Link to={""} target="_blank">
                    <FaTiktok />
                </Link>
            </li>
        </ul>
    );
};

export default SocialMedia;
