import React from "react";
import "./ProjectCard.css";

import { Link } from "react-router-dom";

export default function ProjectCard({
    year,
    title,
    img,
    type,
    technologies,
    bgColor,
}) {
    return (
        <Link to={`/project/${title}`}>
            <div
                style={{ backgroundColor: bgColor }}
                className="project-card-container"
            >
                <div className="project-card-info">
                    <p>{year}</p>
                    <strong>
                        <h2>{title}</h2>
                    </strong>
                    <p>{type}</p>
                    {technologies.map((tec) => {
                        const alt = tec
                            .split("/")
                            [tec.split("/").length - 1].split(".")[0];
                        return (
                            <img
                                className="project-card-icons"
                                key={tec}
                                src={tec}
                                alt={alt}
                            />
                        );
                    })}
                </div>

                <div className="project-card-picture">
                    <img className="project-img" src={img} alt={title} />
                </div>
            </div>
        </Link>
    );
}
