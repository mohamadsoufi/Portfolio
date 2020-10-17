import React from "react";
import { Route, Link } from "react-router-dom";

import data from "../data.json";

export default function Project(props) {
    console.log("props :", props);
    let { id, year, title, img, technologies } = props.proj;

    // let proj;
    // data.forEach((project) => {
    //     if (project.title === props.location.pathname.slice(9)) {
    //         console.log("project :", project);
    //         return (proj = project);
    //     }
    // });
    // let { id, year, title, img, technologies } = proj;

    return (
        <div>
            <Link to="/">
                <button>Back to Works</button>
            </Link>
            <p>{title}</p>
            <h1>testttt</h1>
            <p>testttt</p>
            <p>testttt</p>
            <p>testttt</p>
        </div>
    );
}
