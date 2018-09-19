import React, { Component } from "react"
import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow navbar">
                <ul className="nav nav-pills">
                <li className="nav-item">
                        <Link className="login-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="samples-link" to="/samples">Samples</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="projects-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="logout-link" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}