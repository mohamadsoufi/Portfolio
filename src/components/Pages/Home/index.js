import React, { Fragment } from "react";
import WorksList from "./WorksList/WorksList";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
    return (
        <Fragment>
            <div className="profile">
                <div className="profile-title">
                    <ReactTypingEffect
                        text={[
                            "Greetings, I am Mohamad. :) a Web Developer living in Berlin. ",
                        ]}
                        cursor={" "}
                        speed={110}
                        typingDelay={1000}
                        eraseDelay={1000 * 60 * 120}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h1>
                                    {text.split("").map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={{ color: "gray" }}
                                            >
                                                {char}
                                            </span>
                                        );
                                    })}
                                </h1>
                            );
                        }}
                    />
                </div>
                <div className="profile-description">
                    <p>
                        I am a full stack web developer with a strong passion
                        for coding , I started as a self-taught , and after a
                        couple of online courses and weekend workshops I fully
                        committed to learning and joined an on-site intensive
                        bootcamp to get more familiar with the cutting edge
                        technologies and industry standards. I am eager to be a
                        part of a motivated team to bring fresh ideas and grow
                        together.
                    </p>{" "}
                    <div style={{ marginTop: "190px" }}>
                        <strong> Frontend Tech: </strong>
                        <ReactTypingEffect
                            text={[
                                "React",
                                "Vue",
                                "jQuery",
                                "Handlebars",
                                "CSS",
                            ]}
                            cursorRenderer={(cursor) => <>{cursor}</>}
                            speed={110}
                            typingDelay={500}
                            eraseDelay={1000 * 1}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <>
                                        {text.split("").map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                    style={{ color: "black" }}
                                                >
                                                    {char}
                                                </span>
                                            );
                                        })}
                                    </>
                                );
                            }}
                        />
                    </div>
                    <br />
                    <div style={{ marginTop: "40px" }}>
                        <strong> Backend Tech: </strong>
                        <ReactTypingEffect
                            text={["Node.js", "Express", "MongoDB", "SQL"]}
                            cursorRenderer={(cursor) => <>{cursor}</>}
                            speed={110}
                            typingDelay={500}
                            eraseDelay={1000 * 1}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <>
                                        {text.split("").map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                    style={{ color: "black" }}
                                                >
                                                    {char}
                                                </span>
                                            );
                                        })}
                                    </>
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            <WorksList />
            <ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
                <h2 className="popup">
                    <span role="img" aria-label="finger">
                        <a href="/contact"> contact me</a> 💬
                    </span>
                </h2>
            </ScrollAnimation>
        </Fragment>
    );
}
