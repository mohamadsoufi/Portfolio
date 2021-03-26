import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../../../../data.json";
import ScrollAnimation from "react-animate-on-scroll";
export default function WorksList() {
    return (
        <div className="projects-list-container">
            {data.map((work) => {
                return (
                    <ScrollAnimation
                        key={work._id}
                        // delay={300}
                        animateIn="fadeInRight"
                        animateOnce={true}
                    >
                        <ProjectCard {...work} />
                    </ScrollAnimation>
                );
            })}
        </div>
    );
}
