import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
    const [moveHeader, setMoveHeader] = useState("App-header-start");
    useEffect(() => {
        setMoveHeader("App-header");
    });
    return (
        <header className={moveHeader}>
            <div className="container">
                <div className="img-container">
                    <img className="avatar" src="/avatar.jpg" alt="avatar" />
                </div>
                <div className="header-links">
                    <Link to="/#">
                        <p>HOME</p>
                    </Link>
                    <Link to="/resume">
                        <p>RESUME</p>
                    </Link>
                    <Link to="/contact">
                        <p>CONTACT ME</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
