import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import WorksList from "./components/WorksList";
import data from "./data.json";

function App() {
    let project;
    data.forEach((proj) => {
        return (project = proj);
    });
    let { id, year, title, img, technologies } = project;
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <main className="App-main">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={WorksList} />

                    <Route
                        exact
                        path={`/project/${title}`}
                        render={() => <Project proj={project} />}
                    />
                </main>
                <footer></footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
