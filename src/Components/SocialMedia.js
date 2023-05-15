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
                <Link>
                    <AiFillFacebook />
                </Link>
            </li>
            <li>
                <Link>
                    <AiOutlineWhatsApp />
                </Link>
            </li>
            <li>
                <Link>
                    <BsTelegram />
                </Link>
            </li>
            <li>
                <Link>
                    <FaTiktok />
                </Link>
            </li>
        </ul>
    );
};

export default SocialMedia;
