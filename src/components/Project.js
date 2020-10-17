import React from "react";
import { Link } from "react-router-dom";

import data from "../data.json";
import "./Project.css";

export default function Project(props) {
    let proj;
    data.forEach((project) => {
        if (project.title === props.location.pathname.slice(9)) {
            return (proj = project);
        }
    });
    let { year, title, img, description } = proj;

    return (
        <div className="project-card-info-container">
            <Link to="/">
                <button>Back to Works</button>
            </Link>
            <p>{year}</p>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="project-card-img-container">
                <picture>
                    <img
                        className="project-img-info"
                        src={"." + img}
                        alt="project"
                    />
                </picture>
            </div>
        </div>
    );
}
