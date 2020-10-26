import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="App-header">
            <div className="container">
                <div>
                    <img className="avatar" src="/avatar.jpg" alt="avatar" />
                </div>
                <div className="header-links">
                    <Link to="/#">
                        <p>HOME</p>
                    </Link>
                    <Link to="/resume">
                        <p>RESUME</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
