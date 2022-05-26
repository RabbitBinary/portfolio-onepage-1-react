import React from "react";
import "./header.css";
import CTA from "./CTA";

import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Vladimir Labat</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me"></div>

                <a href="/#contact" className="scroll__down">
                    Scroll down
                </a>
            </div>
        </header>
    );
};

export default Header;
