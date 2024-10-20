import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbarmain">
                    <h1>{"<ԃαɳιʂԋ ɱαɳȥσσɾ/>"}</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Skill">Loader</Link></li>
                        <li><Link to="/Project">Sign up</Link></li>
                        <li><Link to="/Education">Logn in</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
