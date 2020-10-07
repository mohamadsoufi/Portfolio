import React from "react";
import "./Project.css";

export default function Project(props) {
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
                <img className="project-img" src={img} alt="project" />
            </picture>
        </div>
    );
}
