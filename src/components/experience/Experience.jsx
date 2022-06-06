import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { ImNpm } from "react-icons/im";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import {BsGithub } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { CgFigma } from "react-icons/cg"

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillHtml5 className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiCss3 className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <IoLogoJavascript className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiReact className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiSass className="experience__details-icon" />
                            <div>
                                <h4>Sass</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiWordpress className="experience__details-icon" />
                            <div>
                                <h4>Wordpress</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Other Experience</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <ImNpm className="experience__details-icon" />
                            <div>
                                <h4>Npm</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <GrMysql className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMongodb className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsGithub className="experience__details-icon" />
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <RiCodeBoxFill className="experience__details-icon" />
                            <div>
                                <h4>XML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFirebase className="experience__details-icon" />
                            <div>
                                <h4>Firebase</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <CgFigma className="experience__details-icon" />
                            <div>
                                <h4>Figma</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
