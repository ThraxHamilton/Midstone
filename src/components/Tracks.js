import React, { Component } from "react"
import AppViews from './AppViews'
import Navbar from './nav/Navbar'


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