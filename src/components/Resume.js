import React from "react";
import "./Resume.css";

export default function Resume() {
    return (
        <div>
            <div className="title">
                <picture>
                    <img src="./avatar.jpg" alt="avatar" />
                </picture>
                <div>
                    <h1>MOHAMAD SOUFI</h1>
                    <h3>FULL-STACK DEVELOPER</h3>
                </div>
            </div>
            <div className="content-container">
                <div className="left-side">
                    <h2>PERSONAL PROFILE</h2>
                    <p>
                        I am a full stack web developer with a strong passion
                        for
                        <br /> coding , I started as a self-taught , and after a
                        couple of
                        <br /> online courses and weekend workshops I fully
                        committed to
                        <br /> learning and joined an on-site intensive bootcamp
                        to
                        <br /> get more familiar with the cutting edge
                        technologies
                        <br /> and industry standards. I am eager to be a part
                        of a
                        <br /> motivated team to bring fresh ideas and grow
                        together.
                    </p>

                    <br />

                    <h2>CONTACT DETAILS</h2>

                    <p>
                        mail: mohamad.soufi@outlook.com
                        <br /> Mobile: +49 157-864-33517 <br /> Adress: Berlin,
                        Germany
                        <br /> Social:
                    </p>
                    <br />

                    <h2>LANGUAGES</h2>

                    <p>
                        Native: Arabic
                        <br /> Fluent: English
                        <br /> Knowledgeable: German
                    </p>

                    <br />

                    <h2>STACK</h2>

                    <ul>
                        <li>React.js, Redux, Vue.js, jQuery, Flexbox, Grid</li>
                        <li>
                            Node.js, Express, PostgreSQL, REST, web sockets,{" "}
                            <br />
                            Handlebars
                        </li>
                        <li>Jest, React Testing Library</li>
                        <li>Git,GitHub</li>
                        <li>AWS , Heroku</li>
                    </ul>
                </div>
                <div className="right-side">
                    <h2>EMPLOYMENT HISTORY</h2>
                    <br />
                    <h4>RIDER</h4>
                    <p>Foodora.Co | 2018 - 2019</p>
                    <br />
                    <h2>VOLUNTARY EXPERIENCE</h2>
                    <h4>DRIVER, WAITER, AND HR</h4>
                    <p>Soul | Syria | 2009 - 2010</p>
                    <br />
                    <h4>FIELD SURVEYOR</h4>
                    <p>
                        Humanitarian Relief Foundation | Lebanon | 2012 - 2013
                    </p>
                    <br />

                    <h2>EDUCATION HISTORY</h2>
                    <br />
                    <h3>
                        SPICED Academy | Berlin Germany | June - August 2020
                    </h3>
                    <ul>
                        <li>
                            <a href="/#">Certificate</a>
                        </li>
                        <li>
                            Full stack intensive web development bootcamp using:
                            <br />- javaScript,React Node,Express ,Postgress and
                            more .
                        </li>
                    </ul>
                    <br />
                    <h3>Online courses</h3>
                    <ul>
                        <li>
                            <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                                Web Developer Bootcamp
                            </a>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/certificate/UC-SOJ0OMQR/">
                                Certificate
                            </a>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/">
                                The Advanced Web Developer Bootcamp
                            </a>
                        </li>
                        <li>
                            <a href="https://www.udemy.com/course/advanced-node-for-developers/">
                                Node JS: Advanced Concepts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
