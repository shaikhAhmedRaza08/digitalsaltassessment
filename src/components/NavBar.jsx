import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">Header</a>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/component1">First Component</Link></li>
                    <li><Link to="/component2">Second Component</Link></li>
                    <li><Link to="/component3">Third Component</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar