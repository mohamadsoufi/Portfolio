import React from "react";
import ProjectCard from "../../../ProjectCard";
import data from "../../../../data.json";

export default function WorksList() {
    return (
        <div className="projects-list-container">
            <h2>Works</h2>
            {data.map((work) => {
                return <ProjectCard {...work} key={work._id} />;
            })}
        </div>
    );
}
