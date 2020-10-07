import React from "react";
import Project from "./Project";

const works = [
    {
        _id: "1",
        year: "2020",
        title: "Neighbours",
        img: "default",
        technologies: ["svg", "svg", "svg"],
        bgColor: "#B4C4AE",
    },
    {
        _id: "2",
        year: "2020",
        title: "Imageboard",
        img: "default",
        technologies: ["svg", "svg", "svg"],
        bgColor: "#A2ABAB",
    },
    {
        _id: "3",
        year: "2020",
        title: "Petition",
        img: "./petition.png",
        technologies: ["svg", "svg"],
        bgColor: "#7D869C",
    },
];

export default function WorksList() {
    return (
        <div className="works-list-container">
            <h2>Works</h2>
            {works.map((work) => {
                return <Project {...work} key={work._id} />;
            })}
        </div>
    );
}
