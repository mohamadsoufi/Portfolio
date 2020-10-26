import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="App-header">
            <div className="container">
                <div>
                    <img className="avatar" src="/avatar.jpg" alt="avatar" />
                </div>
                <div className="header-links">
                    <a href="/#">
                        <p>HOME</p>
                    </a>
                    <a href="/resume">
                        <p>RESUME</p>
                    </a>
                </div>
            </div>
        </header>
    );
}
