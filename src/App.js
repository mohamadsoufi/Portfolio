import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import ProjectPage from "./components/Pages/ProjectPage";
import Resume from "./components/Pages/Resume";
import Contact from "./components/Pages/Home/Contact";
import Footer from "./components/Footer";

function App() {
    const [contactPageProp, setContactPageProp] = useState(null);
    useEffect(() => {
        if (window.location.pathname == "/contact") {
            setContactPageProp("contactPage");
        }
        return () => {
            setContactPageProp("contactPage");
        };
    });
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
                        <Route
                            path={`/contact`}
                            render={(props) => (
                                <Contact
                                    {...props}
                                    contactPageProp={contactPageProp}
                                />
                            )}
                        />
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
