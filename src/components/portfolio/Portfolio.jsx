import React from "react";
import "./portfolio.css";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
    {
        id: 1,
        image: IMG4,
        title: "Lorem ipsum dolor sit amet consectetur adipis.",
        github: "https://github.com",
        demo: "https://dribbble.com",
    },
    {
        id: 2,
        image: IMG5,
        title: "Lorem ipsum dolor sit amet consectetur adipis.",
        github: "https://github.com",
        demo: "https://dribbble.com",
    },
    {
        id: 3,
        image: IMG6,
        title: "Lorem ipsum dolor sit amet consectetur adipis.",
        github: "https://github.com",
        demo: "https://dribbble.com",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
