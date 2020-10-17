import React from "react";
import Project from "./ProjectCard";
import data from "../data.json";

export default function WorksList() {
    return (
        <div className="works-list-container">
            <h2>Works</h2>
            {data.map((work) => {
                return <Project {...work} key={work._id} />;
            })}
        </div>
    );
}
