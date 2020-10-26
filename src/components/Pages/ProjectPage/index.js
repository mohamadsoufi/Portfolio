import React from "react";
import { Link } from "react-router-dom";

import data from "../../../data.json";
import "./ProjectPage.css";

export default function ProjectPage(props) {
    const { year, title, img, description, github } = data.find(
        (project) => project.title === props.match.params.title
    );

    return (
        <div className="projectPage-info-container">
            <Link to="/">
                <button>Back Home</button>
            </Link>
            <p>{year}</p>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="projectPage-img-container">
                <a href={github}>
                    <img className="projectPage-img" src={img} alt={title} />
                </a>
            </div>
        </div>
    );
}
