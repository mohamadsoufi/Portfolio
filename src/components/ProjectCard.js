import React from "react";
// import Project from "../components/Project";
import "./ProjectCard.css";

import { Route, Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { year, title, img, technologie, bgColor } = props;
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
            </div>
            <picture className="project-card-picture">
                <Link to={`/project/${title}`}>
                    <img className="project-img" src={img} alt="project" />
                </Link>
            </picture>
            {/* <Route path={`/project/${title}`} component={Project} /> */}
        </div>
    );
}
