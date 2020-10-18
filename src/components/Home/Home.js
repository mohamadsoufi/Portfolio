import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import WorksList from "./WorksList/WorksList";
import "./Home.css";

export default function Home() {
    return (
        <Fragment>
            <div className="profile">
                <div className="profile-title">
                    <h1>Greetings, i am Mohamad.</h1>
                    <p>A Web Developer</p>
                    <p> from Berlin.</p>
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
                    </p>
                    <p>
                        {" "}
                        <strong>Frontend Tech :</strong> React, Vue, jQuery,
                        Bootstrap, CSS
                    </p>
                    <p>
                        {" "}
                        <strong> Backend Tech :</strong> Node.js, PHP, Express,
                        MongoDB, SQL
                    </p>
                </div>
            </div>
            <Route exact path="/" component={WorksList} />
        </Fragment>
    );
}
