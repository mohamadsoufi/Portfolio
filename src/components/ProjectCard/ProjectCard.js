import React from "react";
import "./ProjectCard.css";

import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { year, title, img, technologies, bgColor } = props;
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className="project-card-container"
        >
            <div className="project-card-info">
                <p>{year}</p>
                <strong>
                    <h2>{title}</h2>
                </strong>
                <p>Full Stack Development</p>
                {technologies.map((tec) => {
                    return (
                        <img
                            className="project-card-icons"
                            key={tec}
                            src={tec}
                            alt={tec}
                        />
                    );
                })}
            </div>
            <picture className="project-card-picture">
                <Link to={`/project/${title}`}>
                    <img className="project-img" src={img} alt={title} />
                </Link>
            </picture>
        </div>
    );
}
