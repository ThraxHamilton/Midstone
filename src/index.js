import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Tracks from './components/Tracks'



ReactDOM.render(
    <Router>
        <div>
        <Tracks />
        </div>
    </Router>
    ,document.getElementById('root'));
