import React, { Component } from "react"
import AppViews from './AppViews'
import Navbar from './nav/Navbar'

import './Tracks.css'
import "bootstrap/dist/css/bootstrap.min.css"

class Tracks extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <AppViews />
            </React.Fragment>
        )
    }
}

export default Tracks