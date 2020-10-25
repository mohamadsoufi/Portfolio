import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import ProjectPage from "./components/Pages/ProjectPage";
import Resume from "./components//Pages/Resume";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main className="App-main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            path={`/project/:title`}
                            component={ProjectPage}
                        />
                        <Route path={`/resume`} component={Resume} />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
