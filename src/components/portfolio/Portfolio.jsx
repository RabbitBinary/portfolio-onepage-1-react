import React from "react";
import "./portfolio.css";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
    {
        id: 1,
        image: IMG4,
        title: "Animate Personal Portfolio. Theme Powered by React & CSS.",
        github: "https://github.com/RabbitBinary/portfolio-react-3-2022",
        demo: "",
    },
    {
        id: 2,
        image: IMG5,
        title: "Restaurant One-Page Theme. Powered by React & CSS",
        github: "https://github.com/RabbitBinary/restaurant-onepage-theme-1-react",
        demo: "",
    },
    {
        id: 3,
        image: IMG6,
        title: "ShopApp Food and Delivery. Powered by React, Redux & Firebase ",
        github: "https://github.com/RabbitBinary/shopapp-react-redux-firebase",
        demo: "",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github}) => {
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
                                {/*<a
                                  href={demo}
                                  className="btn btn-primary"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                    Live Demo
                                </a>*/}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
