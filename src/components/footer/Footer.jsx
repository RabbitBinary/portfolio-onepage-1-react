import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a
                href="https://vlab.sk"
                rel="noreferrer"
                target="_blank"
                className="footer__logo"
            >
                Vladimir Labat
            </a>

            <div className="footer__socials">
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
                    <FiInstagram />
                </a>
            </div>

            <div className="footer__copyright">
                <small>Vladimir Labat &copy; 2022</small>
            </div>
        </footer>
    );
};

export default Footer;