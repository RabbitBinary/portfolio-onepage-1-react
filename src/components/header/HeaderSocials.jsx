import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://linkedin.com/in/vladimir-labat-882b14194"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a
                href="https://github.com/RabbitBinary"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <GrInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;