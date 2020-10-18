import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Home/WorksList/Project/Project";
import Resume from "./components/Resume/Resume";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main className="App-main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path={`/project/:title`} component={Project} />
                        <Route path={`/resume`} component={Resume} />
                    </Switch>
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
