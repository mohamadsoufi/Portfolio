import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../../../../data.json";

export default function WorksList() {
    return (
        <div className="projects-list-container">
            {data.map((work) => {
                return <ProjectCard {...work} key={work._id} />;
            })}
        </div>
    );
}
