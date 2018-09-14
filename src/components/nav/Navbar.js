import React, { Component } from "react"
import { Link } from "react-router-dom"



export default class NavBar extends Component {
    render() {
        return (
            
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow navbar">
                <ul className="nav nav-pills">
                <li className="nav-item">
                        <Link className="nav-link text-success" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/samples">Samples</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}