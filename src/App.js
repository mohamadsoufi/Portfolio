import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Resume from "./components/Resume";
import WorksList from "./components/WorksList";
import data from "./data.json";

function App() {
    let project;
    data.forEach((proj) => {
        return (project = proj);
    });
    let { id, year, title, img, technologies, description } = project;

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <main className="App-main">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={WorksList} />
                    <Route path={`/project/:title`} component={Project} />
                    <Route path={`/resume`} component={Resume} />
                </main>
                <footer>
                    <a href="https://github.com/mohamadsoufi">Github </a>

                    <a href="https://www.linkedin.com/in/mohamad-soufi/">
                        LinkedIn
                    </a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
